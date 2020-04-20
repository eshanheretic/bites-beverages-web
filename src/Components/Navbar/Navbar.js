import React from "react";

import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
                <header class="header">
            <h1 class="logo">Bites 'N Beverages</h1>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li><a href="#log">Login</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#cart">Cart</a></li>
            </ul>
        </header>
      </div>
    );
  }
}
export default Navbar;