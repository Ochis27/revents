import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/events";

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
};

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvents((prevState) => {
      return [...prevState, event];
    });
  }

  function updateEvent(updatedEvent: AppEvent) {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    selectEvent(null);
    setFormOpen(false);
  }

  function deleteEvent(eventId: string) {
    setEvents(events.filter((event) => event.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            key={selectedEvent ? selectedEvent.id : "create"}
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            updateEvent={updateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
