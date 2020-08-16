import React from "react";
import { render } from "react-dom";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line global-require
  const Root = require("./containers/Root").default;

  render(<Root />, document.getElementById("root"));
});
