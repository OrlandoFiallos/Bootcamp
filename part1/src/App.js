import React from "react";
import { Hello } from "./Hello";

function App() {
  const name = "Manuel";
  const age = 24;
  return (
    <div>
      <h1>Hello guys!</h1>
      <Hello name="Orlando" />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
