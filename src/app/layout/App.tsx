import {Outlet, useLocation} from "react-router-dom";
import {Container} from "semantic-ui-react";
import HomePage from "../../features/events/home/HomePage";
import NavBar from "./nav/NavBar";
import "./styles.css";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
