import { useEffect, useState } from "react";
import "./App.css";
import { apiUrl } from "./global";
import { EventType } from "./types";
import { EventRow } from "./components/Event";
import { EventsWrapper } from "./components/EventsWrapper";
import { Modal } from "./components/Modal";

function App() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventType>();

  useEffect(() => {
    fetch(`${apiUrl}/api/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events: " + error));
  }, []);

  return (
    <>
      <EventsWrapper>
        {events.map((event) => (
          <EventRow
            key={event.event_id}
            event={event}
            onPlaceBetClick={() => setSelectedEvent(event)}
          />
        ))}
      </EventsWrapper>
      <Modal
        open={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(undefined)}
        onSubmit={(bet) =>
          alert(
            `Bet placed successfully on ${selectedEvent?.event_name}. Amount: ${bet}$`
          )
        }
      />
    </>
  );
}

export default App;
