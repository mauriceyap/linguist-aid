import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LinguistAid from "./LinguistAid";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <LinguistAid />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
