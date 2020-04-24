import React, { Component } from "react";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import "./Login.scss";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login">
          <div className="login-main">
            <SignIn />
            {/* <SignUp /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
