import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  console.log(props);
  return <h1>{props.courseName}</h1>;
};

const Content = ({ parts, partes }) => {
  return (
    <ol>
      {partes.map((parte) => {
        return (
          <div>
            <li>parte.name</li>
            <li>parte.exercises</li>
          </div>
        );
      })}
    </ol>
  );
};

const Total = ({ totalEjer }) => {
  return (
    <>
      <p>El total de ejercicios por hacer es de: {totalEjer}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const partes = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header courseName={course} />
      {/* <Content parts="Uno" />
      <Total totalEjer="{partes[0][1]}" /> */}
      {partes.map((item) => {
        return (
          <ol>
            <li>{item.name}</li>
            <li>{item.exercises}</li>
          </ol>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
