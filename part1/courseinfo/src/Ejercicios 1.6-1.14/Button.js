import React from "react";

export const Button = (props) => {
  console.log({ props });
  debugger;
  const { text, handleEvent } = props;

  return (
    <>
      <button onClick={handleEvent}>{text}</button>
    </>
  );
};
