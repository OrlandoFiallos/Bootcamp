import ReactDOM from "react-dom";
import { Hello } from "./Hello";
import React, { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";
import { ContadorClicks } from "./ContadorClicks";
import { Unicafe } from "./Ejercicios 1.6-1.14/Unicafe";
import { Arrays } from "./Renderizando una colección, módulos/Arrays";

const App = () => {
  const [contador, setContador] = useState(1);

  const handleClick = () => setContador(contador + 1);
  const reducirUno = () => setContador(contador - 1);
  const setToZero = () => setContador(0);
  const esPar = contador % 2 === 0;
  const mensajePar = esPar ? "Es un número par." : "Es un número impar.";
  return (
    <>
      <h1>Contador</h1>
      <p>{mensajePar}</p>
      <Display counter={contador} />
      <Button handleClick={handleClick} text="Aumentar" />
      <Button handleClick={reducirUno} text="Reducir en uno" />
      <Button handleClick={setToZero} text="Resetear" />
      <Hello name="Manuel" age="24" />
      <hr></hr>
      <ContadorClicks />
      <hr></hr>
      <h1>Unicafe</h1>
      <Unicafe />
      <hr></hr>
      <Arrays />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
