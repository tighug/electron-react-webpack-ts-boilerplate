import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { Store } from "../store";
import Routes from "./Routes";
import { HashRouter, Link } from "react-router-dom";

type RootProps = {
  store: Store;
};

function Root({ store }: RootProps) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default hot(module)(Root);
