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

        <Car name={"Ford"} year={2018}>
          <p style={{ color: "blue" }}>COLOR</p>
        </Car>
        <Car name={"Audi"} year={2016}>
          <p style={{ color: "red" }}>COLOR</p>
        </Car>
        <Car name={"Mazda"} year={2010} />
      </div>
    );
  }
}

export default App2;
