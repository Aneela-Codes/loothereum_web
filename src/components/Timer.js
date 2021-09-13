import React from "react";
// import ReactDOM from 'react-dom';
import Countdown from "react-countdown";

const Timer = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div className="timer">
    <div className="container">
    <h1>Next Reward Distribution in...</h1>
    <Countdown
        date={Date.now() + 50000000000000}
        renderer={renderer} daysInHours = "true"
      />
    </div>
    
    </div>
  );
};

export default Timer;
