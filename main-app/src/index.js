import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();

registerMicroApps([
  {
    name: "reactApp",
    entry: "//localhost:3001",
    container: "#react",
    activeRule: "/react",
  },
  {
    name: "vueApp",
    entry: "//localhost:3002",
    container: "#vue",
    activeRule: "/vue",
  },
  {
    name: "angularApp",
    entry: "//localhost:3003",
    container: "#angular",
    activeRule: "/angular",
  },
]);

start();
