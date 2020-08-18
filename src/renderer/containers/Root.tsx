import { hot } from "react-hot-loader";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import ToDosPage from "./ToDosPage";

function Root() {
  return (
    <Provider store={store}>
      <div>Hello, World!</div>
      <ToDosPage />
    </Provider>
  );
}

export default hot(module)(Root);
