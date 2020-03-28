import React, { FunctionComponent } from "react";

import "./logo.scss";
import logo200 from "./logo-200.png";

const Logo: FunctionComponent<{}> = () => (
  <div className="logo">
    <img src={logo200} alt="logo" />
  </div>
);

export default Logo;
