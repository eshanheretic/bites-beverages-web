import React from "react";

import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default App;
