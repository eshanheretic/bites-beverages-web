import React from "react";

import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
        <header className="header clearfix">
          <h1 className="logo">Bites 'N Beverages</h1>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#log">Login</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cart">Cart</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Navbar;
