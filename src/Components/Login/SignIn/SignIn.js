import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import cookingImage from "../../../assets/images/cooking.png";
import "./SignIn.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        value: "",
        classes: "",
      },
      pass: {
        value: "",
        classes: "",
      },
      rememberMe: {
        value: false,
      },
    };
  }

  handleFormChange = (event) => {
    const { target, type } = event;
    const { value, name } = target;

    if (type === "change") {
      this.setState({
        [name]: { ...this.state[name], value },
      });
    } else if (type === "focus" || type === "blur") {
      let classes = "";
      if (type === "focus") {
        classes = this.state[name].classes + " focus";
      } else {
        classes = this.state[name].classes.replace(" focus", "");
      }
      this.setState({
        [name]: { ...this.state[name], classes },
      });
    }
  };

  handleFormSubmit = (event) => {
    console.log(
      " Value of email - ",
      this.state.email.value,
      " Value of pass - ",
      this.state.pass.value
    );
    event.preventDefault();
  };

  render() {
    var { email, pass, rememberMe } = this.state;

    return (
      <div className="sign-in">
        <form className="login-form mb-2" onSubmit={this.handleFormSubmit}>
          <h3 className="welcome-back mb-3">Welcome Back</h3>
          <div className="form-box mb-2">
            <div className={"form-element-container" + email.classes}>
              <i className="icon fa fa-envelope"></i>
              <input
                className="form-element email"
                type="text"
                name="email"
                value={email.value}
                onChange={this.handleFormChange}
                onFocus={this.handleFormChange}
                onBlur={this.handleFormChange}
                placeholder="Email Id"
              />
            </div>
            <div className={"form-element-container" + pass.classes}>
              <i className="icon fa fa-lock"></i>
              <input
                className="form-element pass"
                type="password"
                name="pass"
                value={pass.value}
                onChange={this.handleFormChange}
                onFocus={this.handleFormChange}
                onBlur={this.handleFormChange}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="remember-forgot mb-3">
            <div>
              <input
                type="checkbox"
                value={rememberMe.value}
                name="rememberMe"
                onChange={this.handleFormChange}
              />
              <span>Remember Me</span>
            </div>
            <div>
              <a href="#">
                <span>Forgot Password?</span>
              </a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary login-btn mb-1">
            Login
          </button>
        </form>

        <div>
          <div className="social-login mb-2">
            <div className="mb-1">Or Sign Up Using</div>
            <i
              style={{ color: "red" }}
              className="fa fa-google-plus-official fa-2x mr-4"
            ></i>
            <i
              style={{ color: "blue" }}
              className="fa fa-facebook-official fa-2x"
            ></i>
          </div>

          <div className="create-account">
            <span>Don't have an account? </span>
            <strong>
              <NavLink to="/signup">Register</NavLink>
            </strong>
          </div>
        </div>

        <div className="cooking-image">
          <img src={cookingImage} alt="" />
        </div>
      </div>
    );
  }
}
