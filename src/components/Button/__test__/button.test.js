import React from "react";
import ReactDom from "react-dom";

import Button from "./../Button.js"; // import the component that you want to test.
import { isTSAnyKeyword } from "@babel/types";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button></Button>, div);
});
