import React, { Component } from "react";
import './Card.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const Card=({name, description})=>{
    return(
        <div className='card'>
            <img src='https://st2.depositphotos.com/5653638/11511/i/950/depositphotos_115111416-stock-photo-maharashtrian-or-marathi-food-platter.jpg' alt='' / >
            <h2>{name}</h2>
            <p>{description}</p>
            <button >Order Now!</button>
        </div>
    )
}
export default Card;