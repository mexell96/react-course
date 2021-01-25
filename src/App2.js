import React, { Component } from "react";
import Car from "./Car/Car";

export class App2 extends Component {
  render() {
    const divStyle = {
      textAlign: "center",
    };
    return (
      <div style={divStyle}>
        <h1>Hello, Minsk</h1>

        <Car />
      </div>
    );
  }
}

export default App2;
