import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  timerLabel,
  startStopButtonlabel,
  timeLeft,
  handleStartStopClick,
  handleResetButtonClick,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div className="flex flex-col font-clock justify-evenly items-center w-64 h-64 bg-teal-300 rounded-full border-2
    border-teal-900">
      <p className="text-teal-900 text-2xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="font-clock text-3xl text-teal-900" id="timer-left">
        {formattedTimeLeft}
      </p>

      <div className="grid grid-flow-col gap-2">
        <button
          className="text-teal-200 text-1xl bg-teal-800 px-3 py-1  border-2
          border-teal-900 border-solid rounded transition hover:bg-teal-200 hover:text-teal-900  duration-300"
          id="start_stop"
          onClick={handleStartStopClick}
        >
          {startStopButtonlabel}
        </button>
        <button
          className="text-teal-200 text-1xl bg-teal-800 px-3 py-1  border-2
          border-teal-900 border-solid rounded transition hover:bg-teal-200 hover:text-teal-900  duration-300"
          id="reset"
          onClick={handleResetButtonClick}
        >
          Reset
        </button>
      </div>
    </div> // minutes:seconds
  );
};

export default TimeLeft;
