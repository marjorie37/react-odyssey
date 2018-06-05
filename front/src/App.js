import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mon app</h1>
        {/* <SignUp2 /> */}
        <SignUp />
      </div>
    );
  }
}

export default App;
