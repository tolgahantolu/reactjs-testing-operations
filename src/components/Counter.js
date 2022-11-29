import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [secret, setSecret] = useState("");
  const [checked, setChecked] = useState(false);

  function increaseCounter() {
    setCounter((prevCount) => prevCount + 1);
  }
  function decreaseCounter() {
    setCounter((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    increaseCounter();
    decreaseCounter();
  }, [counter]);

  return (
    <>
      <h2 data-testid="counter">{counter}</h2>
      <button type="button" onClick={increaseCounter}>
        Increment
      </button>
      <button type="button" onClick={decreaseCounter}>
        Decrement
      </button>
      <div>
        <label htmlFor="input">Secret</label>
        <input
          id="input"
          type="text"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />

        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </>
  );
};

export default Counter;
