import React, { Component } from "react";
import './Restaurants.scss';
import Card from './Card';
class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [{
                name: 'Great Marathi Restaurant',
                description: 'The best Of Maharashtra\'s street food, order now to enjoy'
            },
            {
                name: 'Bengal\'s delights special',
                description: 'The best Of Bengal\'s street food, order now to enjoy'
            },
            {
                name: 'Delhi\'s Streets Foods',
                description: 'The best Of Delhi\'s street food, order now to enjoy'
            },
            {
                name: 'South Indian Restaurant',
                description: 'The best Of South Indian street food, order now to enjoy'
            }
            ]
        }
    }
    render() {
        const { restaurants } = this.state
        return (
            <div className='res-cards'>
                {restaurants.map((item) => <Card name={item.name}
                    description={item.description}
                />)}

            </div>
        )
    }
}
export default Restaurants;