import { screen, render, cleanup } from "@testing-library/react";
import App from "./App";

// tüm testler çalışmadan önce yapmak istediğimiz işlemleri burada yapıyoruz.
beforeAll(() => {
  console.log("beforeAll");
});

// her testten önce yapmak istediğimiz işlemleri burada yapıyoruz.
beforeEach(() => {
  console.log("beforeEach");
  render(<App />);
});

// tüm testler çalıştıktan sonra yapmak istediğimiz işlemleri burada yapıyoruz.
afterAll(() => {
  console.log("afterAll");
});

// her testten sonra yapmak istediğimiz işlemleri burada yapıyoruz.
afterEach(() => {
  console.log("afterEach");
  cleanup(); // !artık otomatik olarak gerçekleştiriliyor...
});

test("my fist test", () => {
  const { debug, container } = render(<App />);

  debug(); // component ağacını döner... screen.debug() olarak da kullanılabilir.

  console.log(container.firstChild.className); // container body elementi içerisini kapsar...

  expect(container.firstChild.className === "App").toBe(true);

  // !NOT: debug ve container vb. kullanmaktan olabildiğince kaçınmalıyız.
});

test("header render correctly", () => {
  const headerEl = screen.getByText(/testing for react components/i);
  expect(headerEl).toBeInTheDocument();
  expect(headerEl).toHaveTextContent("Testing for React Components");

  screen.debug();
});

test("Darkred Elements Renders Correctly", () => {
  const darkredEl = screen.getByText(/Benim rengim koyu kırmızı!/i);
  expect(darkredEl).toBeInTheDocument();
  expect(darkredEl).toHaveTextContent("Benim rengim koyu kırmızı");
  expect(darkredEl).toHaveClass("darkred");
});

test("Disabled Button Test", () => {
  //  const buttonEl = screen.getByRole("button", { name: "disabled" });
  const buttonEl = screen.getByTestId("btnDisabled");
  expect(buttonEl).toHaveTextContent("Disabled");
  expect(buttonEl).toBeDisabled();
});

test("Enabled Button Test", () => {
  //  const buttonEl = screen.getByRole("button", { name: "enabled" });
  const buttonEl = screen.getByTestId("btnEnabled");
  expect(buttonEl).toHaveTextContent("Enable");
  expect(buttonEl).not.toBeDisabled();
});
