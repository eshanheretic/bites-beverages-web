import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Login from "./Components/Login/Login";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login showSignIn="true" {...props} />}
          />
          <Route
            path="/signup"
            render={(props) => <Login showSignIn="false" {...props} />}
          />
          <Route path="/home" render={(props) => <Slider {...props} />} />
          <Redirect to="/home"></Redirect>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
