import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";

const Cars = (
  <>
    <div>Hello, World!</div>
    <App name="Mazda" age="10" color="red" />
    <App name="Opel" age="6" color="green" />
    <App name="Ford" age="7" color="yellow" />
  </>
);
ReactDOM.render(<App2 />, document.getElementById("root"));
