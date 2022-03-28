import React from "react";
import { useState } from "react";
import { History } from "./History";

export const ContadorClicks = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);
  const handleLeftClick = () => {
    // setClicks({ ...clicks, left: clicks.left + 1 });
    setAllClicks(allClicks.concat("L"));
  };
  const handleRightClick = () =>
    // setClicks({ ...clicks, right: clicks.right + 1 });
    setAllClicks(allClicks.concat("R"));

  return (
    <>
      <p>
        {clicks.left}
        <button onClick={handleLeftClick}>Izquierda</button>
      </p>
      <p>
        {clicks.right}
        <button onClick={handleRightClick}>Derecha</button>
      </p>
      <p>Total de clicks: {clicks.left + clicks.right}</p>
      <History allClicks={allClicks} />
    </>
  );
};
