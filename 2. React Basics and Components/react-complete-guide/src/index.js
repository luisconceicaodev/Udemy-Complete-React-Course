import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Second arg is where the ReactDOM will append
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
