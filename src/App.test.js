import { screen, render } from "@testing-library/react";
import App from "./App";

test("my fist test - header renders correctly", () => {
  const { debug, container } = render(<App />);

  debug(); // component ağacını döner... screen.debug() olarak da kullanılabilir.

  console.log(container.firstChild.className); // container body elementi içerisini kapsar...

  expect(container.firstChild.className === "App").toBe(true);

  // !NOT: debug ve container vb. kullanmaktan olabildiğince kaçınmalıyız.
});
