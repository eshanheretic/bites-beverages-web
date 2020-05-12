import React, { Component } from "react";
import './AutoComplete.css'
import Restaurants from './Restaurants';

class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            value: ''
        }
    }
    onChangeInput = (e) => {
        const value = e.target.value;
        const { items } = this.props;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ value }));
        this.setState(() => ({ suggestions }));

    }
    takesugges = (val) => {
        this.setState(() => ({
            value: val,
            suggestions: []
        }))
    }
    returnSugges() {
        const { suggestions } = this.state;
        if (suggestions.length === 0)
            return null;
        return (
            <ul>
                {suggestions.map((item, i) =>
                    <li key={parseInt(i)} onClick={() => this.takesugges(item)}>{item}</li>
                )}
            </ul>
        );
    }
    render() {
        const { value, suggestions } = this.state;
        return (

            <div className="AutoComplete-main">
                <div className='auto'>                <input value={this.state.value}
                    placeholder="Enter your city/locality"
                    onChange={this.onChangeInput} />

                </div>
                {this.returnSugges()}

                {value.length !== 0 && suggestions.length === 0 ? <div className='restaurants'>
                    <Restaurants />
                </div> : <div>Loading....</div>}

            </div>
        );
    }
}
export default AutoComplete;