import React from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./ListPage";
import HomePage from "./HomePage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/todos" component={ListPage} />
    </Switch>
  );
}
