import styled from "styled-components";
import { StyledEvent } from "./Event";
import { ReactNode } from "react";

export const StyledEventsWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

export const EventsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StyledEventsWrapper>
      <StyledEvent>
        <div>
          <b>Event name</b>
        </div>
        <div>
          <b>Odds</b>
        </div>
        <div>
          <b>Place bet</b>
        </div>
      </StyledEvent>
      {children}
    </StyledEventsWrapper>
  );
};
