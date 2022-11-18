import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Testing for React Components</h1>
      {/*<button aria-label="disabled" disabled>
        Disabled
      </button>
      <button aria-label="enabled">Enable</button>*/}
      <button data-testid="btnDisabled" disabled>
        Disabled
      </button>
      <button data-testid="btnEnabled">Enable</button>
      <h3 className="darkred">Benim rengim koyu kırmızı!</h3>
    </div>
  );
};

export default App;
