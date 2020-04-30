import React, {Component} from 'react';
import './footer.scss'
class Footer extends Component{
    render()
    {
        return(
            <div className='footer'>
                <h2>Bites 'N Beverages Pvt. Lt.</h2>
                <p>Contact Us</p>
                <ul>
                    <li>Phone: 1234567890</li>
                    <li>Email: bnb@bnbind.in</li>
                    <li>Address: xyz, pqrs, Mumbai </li>
                </ul>
            </div>
        )
    }
} 
export default Footer;