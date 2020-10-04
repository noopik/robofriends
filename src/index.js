import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { robots } from "./robots";

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
