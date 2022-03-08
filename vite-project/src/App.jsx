import React, { useState, useEffect, useRef } from "react";
import "./assets/main.css";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const audioElement = useRef(null);

  // States

  const [sessionLength, setSessionLength] = useState(60 * 25); // 25 minutes

  const [breakLength, setBreakLength] = useState(60 * 5); // 5 minutes

  const [currentSessionType, setCurrentSessionType] = useState("Session");

  const [intervalId, setIntervalId] = useState(null);

  const [timeLeft, setTimeLeft] = useState(sessionLength);

  // to update time left we use useEffect from React Hook

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  // Break

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };

  // Session

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(sessionLength + 60);
    }
  };

  // Timer
  const isStarted = intervalId != null;

  const handleStartStopClick = () => {
    console.log(currentSessionType);
    if (isStarted) {
      // Stop mode, use clearInterval

      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      // Start mode, use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          } else if (newTimeLeft == 0) {
            console.log("passou aq" + newTimeLeft);
            handleStartStopClick();
          }
          // time left is less than zero
          audioElement.current.play();
          if (currentSessionType == "Session") {
            // Switching to Break
            setCurrentSessionType("Break");
            return breakLength;
          } else if (currentSessionType == "Break") {
            // Switching to Session
            setCurrentSessionType("Session");
            return sessionLength;
          }
        });
      }, 1000); // TODO; turn back into 1000ms
      setIntervalId(newIntervalId);
    }
  };

  // Reset

  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.load();
    // clear timeout interval
    clearInterval(intervalId);
    // set intervalId null
    setIntervalId(null);
    // set sessiontype to 'Session"
    setCurrentSessionType("Session");
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset the break length to 5 minutes
    setBreakLength(60 * 5);
    // reset the timer to 25 minutres(initial session length)
    setTimeLeft(60 * 25);
  };

  // Render

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-teal-600">
      <div className="flex w-full justify-around">
        <Break
          breakLength={breakLength}
          decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
          incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        />

        <TimeLeft
          handleResetButtonClick={handleResetButtonClick}
          timerLabel={currentSessionType}
          handleStartStopClick={handleStartStopClick}
          startStopButtonlabel={isStarted ? "Stop" : "Start"}
          timeLeft={timeLeft}
        />

        <Session
          sessionLength={sessionLength}
          decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
          incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        />
      </div>

      <audio id="beep" ref={audioElement}>
        <source src="assets/alarm-clock-01.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
