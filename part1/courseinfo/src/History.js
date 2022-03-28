import React from "react";

export const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <>
        <p>The app is used by pressing the buttons.</p>
      </>
    );
  }

  return (
    <>
      <p>Button press history: {allClicks.join("+")}</p>
    </>
  );
};
