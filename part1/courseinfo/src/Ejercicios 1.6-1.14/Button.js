import React from "react";

export const Button = ({ text, handleEvent }) => {
  return (
    <>
      <button onClick={handleEvent}>{text}</button>
    </>
  );
};
