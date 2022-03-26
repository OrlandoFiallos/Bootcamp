import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./Hello";

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={10 + 10} />
      <Hello name={name} age={10} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
