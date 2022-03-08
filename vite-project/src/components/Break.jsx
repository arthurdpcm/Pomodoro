import React from "react";
import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButtonContainer,
  PlusMinusButton,
} from "../ui/BreakSessionUI";
const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel>Break</BreakSessionLabel>

      <BreakSessionTime>{breakLengthInMinutes}</BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
          -
        </PlusMinusButton>

        <PlusMinusButton id="break-increment" onClick={incrementBreakLengthByOneMinute}>
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

export default Break;
