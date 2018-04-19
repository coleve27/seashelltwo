import React from "react";

import "./Nav.css";
import User from "../User/User.js";

const Nav = props => (
  <nav className="navbar">
    <h1>100 Seashells</h1>
    <User userData={props.userData} />
  </nav>
);

export default Nav;
