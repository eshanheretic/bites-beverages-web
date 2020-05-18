import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
        <header className="header clearfix">
          <h1 className="logo">
            <NavLink to="/home">Bites 'N Beverages</NavLink>
          </h1>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Navbar;
