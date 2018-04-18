import React from "react";

import "./Nav.css";
import User from "../User/User.js";

const Nav = props => (
  <nav className="navbar">
    <User userData={props.userData} />
  </nav>
);

export default Nav;
