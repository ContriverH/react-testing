import React from "react";
import ReactDom from "react-dom";

import Button from "./../Button.js"; // import the component that you want to test.
// import { isTSAnyKeyword } from "@babel/types";

import { render, cleanup } from "@testing-library/react"; // to get the render function from the react testing library
import "@testing-library/jest-dom"; // to get the expect function of the testing
// import "jest-dom/extend-expect"; // to get the expect function of the testing

import renderer from "react-test-renderer";

afterEach(cleanup); // to cleanup the test element, so that a new element with the same id can be created

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button></Button>, div);
  ReactDom.unmountComponentAtNode(div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click me please" />); // getByTestId will give the testId of the element, which is given the id of the test id
  expect(getByTestId("button")).toHaveTextContent("Click me please");
});

// Below example is same as the above one, just the label is changed.

it("save button correctly", () => {
  const { getByTestId } = render(<Button label="save" />); // getByTestId will give the testId of the element, which is given the id of the test id
  expect(getByTestId("button")).toHaveTextContent("save");
});

it("matches snapshot 1", () => {
  const tree = renderer.create(<Button label="save" />).toJSON(); // it will convert it to a virtual dom object
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="click me please" />).toJSON(); // it will convert it to a virtual dom object
  expect(tree).toMatchSnapshot();
});
