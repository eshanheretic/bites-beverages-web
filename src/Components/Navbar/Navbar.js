import React from "react";

import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
        <header>
          <div className="container">
            <img src="bitesbeve.png" className="logo" alt="logo" />
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Cart</a>
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
