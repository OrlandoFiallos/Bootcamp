import React from "react";
import { useState } from "react";
import { Button } from "../Button";
import { Statistics } from "./Statistics";

export const Unicafe = () => {
  const [comments, setComments] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setComments({ ...comments, good: comments.good + 1 });
  };

  const handleNeutral = () => {
    setComments({ ...comments, neutral: comments.neutral + 1 });
  };

  const handleBad = () => {
    setComments({ ...comments, bad: comments.bad + 1 });
  };

  const all = comments.good + comments.neutral + comments.bad;

  const average = (comments.bad * -1 + comments.good * 1) / all;

  const percenPositives = (comments.good / all) * 100;

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleEvent={handleGood} text={"good"} />
      <Button handleEvent={handleNeutral} text={"neutral"} />
      <Button handleEvent={handleBad} text={"bad"} />
      <br />
      {comments.good === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={comments.good}
          neutral={comments.neutral}
          bad={comments.bad}
          all={all}
          average={average}
          positive={percenPositives}
        />
      )}
    </>
  );
};
