import React, { Component } from 'react';
import './cart.scss';

class Cart extends Component {
    render() {

        return (
            <div className='cart'>
                <div className='prod-cards'>
                    <div className='prod-card'>
                        <name >Mysore Masala Dosa</name>
                        <div className='modify'>
                            <i class="fas fa-plus" ></i>1<i class="fas fa-minus"></i>
                        </div>
                        <div className='delete' >
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                    <div className='prod-card'>
                        <name>Tomato Utpam </name>
                        <div className='modify'>
                            <i class="fas fa-plus"></i>1 <i class="fas fa-minus"></i>
                        </div>
                        <div className='delete' >
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                    <div className='total'>
                        <h2>Total: $104 </h2>
                        <div className='sub'>
                            <div>Taxes and delivery: $4</div>
                            <div>Cost: $100</div>
                        </div>
                    </div>



                </div>

            </div>
        )
    }
}
export default Cart;