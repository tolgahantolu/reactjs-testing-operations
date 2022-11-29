import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

beforeEach(() => {
  render(<Counter />);
});

test("Counter is initially 0", () => {
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(0);
});

test("Increment button works correctly", () => {
  const counterEl = screen.getByTestId("counter");
  const incrementButton = screen.getByRole("button", {
    name: /increment/i,
  });

  expect(counterEl).toHaveTextContent(0);

  // click on increment button
  userEvent.click(incrementButton); // increment butona bir kere tıklandı
  userEvent.click(incrementButton); // increment butona bir kere tıklandı
  expect(counterEl).toHaveTextContent(2);
});

test("Decrement button works correctly", () => {
  const counterEl = screen.getByTestId("counter");
  const decrementButton = screen.getByRole("button", {
    name: /decrement/i,
  });

  expect(counterEl).toHaveTextContent(0);

  // click on increment button
  userEvent.click(decrementButton); // decrement butona bir kere tıklandı
  expect(counterEl).toHaveTextContent(-1);
});

test("Test secret message is initially is empty", () => {
  const inputEl = screen.getByLabelText(/secret/i);

  expect(inputEl).toHaveValue("");
});

test("Test input change", () => {
  const inputEl = screen.getByLabelText(/secret/i);
  expect(inputEl).toHaveValue("");

  userEvent.type(inputEl, "Bu bir sır :)");
  expect(inputEl).toHaveValue("Bu bir sır :)");
});

test("Initially Checkbox is not checked", () => {
  const checkEl = screen.getByRole("checkbox");

  expect(checkEl).not.toBeChecked();
});

test("Checkbox works correctly ", () => {
  const checkEl = screen.getByRole("checkbox");
  expect(checkEl).not.toBeChecked();

  userEvent.click(checkEl);
  expect(checkEl).toBeChecked();
});
