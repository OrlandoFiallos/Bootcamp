import React from "react";
import { useState } from "react";

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

  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <br />
      <h2>stadistics</h2>
      <p>good {comments.good}</p>
      <p>neutral {comments.neutral}</p>
      <p>bad {comments.bad}</p>
    </>
  );
};
