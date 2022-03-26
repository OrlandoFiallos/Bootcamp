import React from "react";

export const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };
  return (
    <>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>You were probably born in {bornYear()}</p>
    </>
  );
};
