import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { apiUrl } from "./global";

type Event = {
  event_id: string;
  event_name: string;
  odds: number;
};

function App() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events: " + error));
  }, []);

  return (
    <>
      {events.map((event) => (
        <div>
          {event.event_name} - {event.odds}
        </div>
      ))}
    </>
  );
}

export default App;
