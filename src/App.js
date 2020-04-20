import React from "react";

import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Login from "./Components/Login/Login";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        {/* <Login /> */}
      </React.Fragment>
    );
  }
}

export default App;
