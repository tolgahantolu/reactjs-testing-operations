import { screen, render } from "@testing-library/react";
import App from "./App";

test("my fist test", () => {
  const { debug, container } = render(<App />);

  debug(); // component ağacını döner... screen.debug() olarak da kullanılabilir.

  console.log(container.firstChild.className); // container body elementi içerisini kapsar...

  expect(container.firstChild.className === "App").toBe(true);

  // !NOT: debug ve container vb. kullanmaktan olabildiğince kaçınmalıyız.
});

test("header render correctly", () => {
  render(<App />);

  const headerEl = screen.getByText(/testing for react components/i);
  expect(headerEl).toBeInTheDocument();
  expect(headerEl).toHaveTextContent("Testing for React Components");

  screen.debug();
});

test("Darkred Elements Renders Correctly", () => {
  render(<App />);
  const darkredEl = screen.getByText(/Benim rengim koyu kırmızı!/i);
  expect(darkredEl).toBeInTheDocument();
  expect(darkredEl).toHaveTextContent("Benim rengim koyu kırmızı");
  expect(darkredEl).toHaveClass("darkred");
});

test("Disabled Button Test", () => {
  render(<App />);
  //  const buttonEl = screen.getByRole("button", { name: "disabled" });
  const buttonEl = screen.getByTestId("btnDisabled");
  expect(buttonEl).toHaveTextContent("Disabled");
  expect(buttonEl).toBeDisabled();
});

test("Enabled Button Test", () => {
  render(<App />);
  //  const buttonEl = screen.getByRole("button", { name: "enabled" });
  const buttonEl = screen.getByTestId("btnEnabled");
  expect(buttonEl).toHaveTextContent("Enable");
  expect(buttonEl).not.toBeDisabled();
});
