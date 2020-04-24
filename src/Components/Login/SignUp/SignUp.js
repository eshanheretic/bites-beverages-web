import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";

import cookingImage from "../../../assets/images/cooking.png";
import "./SignUp.scss";

const SignUp = () => {
  // const validate = (values) => {};
  const signUpForm = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      pass: "",
      confirmPass: "",
    },
    // validate,
    onSubmit: (values) => {
      console.log("signup form values - ", values);
    },
  });

  return (
    <div className="sign-up">
      <form className="login-form mb-2" onSubmit={signUpForm.handleSubmit}>
        <h3 className="welcome-back mb-3">Create Account</h3>
        <div className="form-box mb-4">
          <div className="flex-and-wrap">
            <div className="form-element-container name-field">
              <i className="icon fa fa-user-circle-o"></i>
              <input
                className="form-element border-radius-zero"
                type="text"
                name="fistName"
                id="fistName"
                value={signUpForm.values.fistName}
                onChange={signUpForm.handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-element-container name-field">
              <i className="icon fa fa-user"></i>
              <input
                className="form-element border-radius-zero"
                type="text"
                name="lastName"
                id="lastName"
                value={signUpForm.values.lastName}
                onChange={signUpForm.handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-element-container">
            <i className="icon fa fa-envelope"></i>
            <input
              className="form-element email"
              type="email"
              name="email"
              id="email"
              value={signUpForm.values.email}
              onChange={signUpForm.handleChange}
              placeholder="Email Id"
            />
          </div>
          <div className="form-element-container">
            <i className="icon fa fa-lock"></i>
            <input
              className="form-element pass"
              type="password"
              name="pass"
              id="pass"
              value={signUpForm.values.pass}
              onChange={signUpForm.handleChange}
              placeholder="Password"
            />
          </div>
          <div className="form-element-container pb-0">
            <i className="icon fa fa-unlock-alt"></i>
            <input
              className="form-element"
              type="password"
              name="confirmPass"
              id="confirmPass"
              value={signUpForm.values.confirmPass}
              onChange={signUpForm.handleChange}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary login-btn mb-1">
          Sign Up
        </button>
      </form>

      <div>
        <span>Already Registered? </span>
        <strong>
          <NavLink to="/login">Log In</NavLink>
        </strong>
      </div>

      <div className="cooking-image">
        <img src={cookingImage} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
