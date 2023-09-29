import styled from "styled-components";
import { EventType } from "../types";
import { Button } from "./Button";

export const StyledEvent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 10px;
`;

type EventRowProps = { event: EventType; onPlaceBetClick: () => void };

export const EventRow = ({ event, onPlaceBetClick }: EventRowProps) => {
  return (
    <StyledEvent>
      <div>{event.event_name}</div>
      <div>{event.odds}</div>
      <Button onClick={onPlaceBetClick}>Place bet</Button>
    </StyledEvent>
  );
};
