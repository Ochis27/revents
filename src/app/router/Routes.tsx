import {createBrowserRouter} from "react-router-dom";
import EventDashboard from "../features/events/dashboard/EventDashboard";
import EventDetailedPage from "../features/events/details/EventDetailedPage";
import EventForm from "../features/events/form/EventForm";
import App from "../layout/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/events/:id",
        element: <EventDetailedPage />,
      },
      {
        path: "/events",
        element: <EventDashboard />,
      },
      {
        path: "/manage/:id",
        element: <EventForm />,
      },
      {
        path: "/createEvent",
        element: <EventForm />,
      },
    ],
  },
]);
