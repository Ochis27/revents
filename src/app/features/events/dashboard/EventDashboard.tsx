import {useEffect, useState} from "react";
import {Grid} from "semantic-ui-react";
import {sampleData} from "../../../api/sampleData";
import {AppEvent} from "../../../types/Event";
import EventForm from "../form/EventForm";
import EventList from "./EventList";

type Props = {
  formOpen: boolean;
  selectedEvent: AppEvent | null;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent | null) => void;
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

  function updateEvent(updateEvent: AppEvent) {
    setEvents(
      events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
    );
    selectEvent(null);
    setFormOpen(false);
  }

  function deleteEvent(eventId: string) {
    setEvents(events.filter((evt) => evt.id !== eventId));
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
            updateEvent={updateEvent}
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : "create"}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
