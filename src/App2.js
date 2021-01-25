import React, { Component } from "react";

export class App2 extends Component {
  render() {
    const divStyle = {
      textAlign: "center",
    };
    return (
      <div style={divStyle}>
        <h1 style={{ color: "blue", fontSize: "20px" }}>Hello, Minsk</h1>
      </div>
    );
  }
}

export default App2;
