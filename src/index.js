import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Cars = (
  <>
    <App name="Mazda" age="10" />,
    <App name="Opel" age="6" />,
    <App name="Ford" age="7" />,
  </>
);
ReactDOM.render(Cars, document.getElementById("root"));
