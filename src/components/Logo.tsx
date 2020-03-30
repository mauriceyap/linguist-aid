import React, { FunctionComponent } from "react";

import logo from "./logo.svg";
import "./logo.scss";

const Logo: FunctionComponent<{}> = () => (
  <div className="logo">
    <img src={logo} alt="logo" />
  </div>
);

export default Logo;
