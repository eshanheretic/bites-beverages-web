import React from "react";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import "./Login.scss";

const Login = (props) => {
  return (
    <React.Fragment>
      <div className="login">
        <div className="login-main">
          {props.showSignIn == "true" ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
