import React from "react";

import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
        <header>
          <div className="container">
            <h1 className="logo">Bites 'N Beverages </h1>

            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Navbar;
