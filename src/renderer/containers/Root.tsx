import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { Store } from "../store";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";

type RootProps = {
  store: Store;
};

function Root({ store }: RootProps) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default hot(module)(Root);
