import React, { Component } from "react";
import "./App.css";
import SignUp from "./SingUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mon app</h1>
        <SignUp />
      </div>
    );
  }
}

export default App;
