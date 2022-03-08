import React from "react";
import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButtonContainer,
  PlusMinusButton,
} from "../ui/BreakSessionUI";
const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment
    .duration(sessionLength, "s")
    .asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel>Session</BreakSessionLabel>

      <BreakSessionTime>{sessionLengthInMinutes}</BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton
          id="session-decrement"
          onClick={decrementSessionLengthByOneMinute}
        >
          -
        </PlusMinusButton>

        <PlusMinusButton
          id="session-increment"
          onClick={incrementSessionLengthByOneMinute}
        >
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

export default Session;
