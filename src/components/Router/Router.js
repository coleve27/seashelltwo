import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "../Game/Game.js";
import Home from "../Home/Home.js";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game/:userName" component={Game} />
    </Switch>
  </BrowserRouter>
);

export default Router;
