import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppSelector } from "../../../store/Store";
import { useEffect } from "react";
import { actions } from "../eventSlice";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";

export default function EventDashboard() {
  const { data: events, status } = useAppSelector((state) => state.events);
  const { loadCollection } = useFireStore("events");

  useEffect(() => {
    loadCollection(actions);
  }, [loadCollection]);

  if (status === "loading") return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
