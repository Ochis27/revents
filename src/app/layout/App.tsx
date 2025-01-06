import {Outlet, useLocation} from "react-router-dom";
import {Container} from "semantic-ui-react";
import HomePage from "../features/home/HomePage";
import NavBar from "./nav/NavBar";

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
            {location.pathname === "/" ? <HomePage /> : <Outlet />}
          </Container>
        </>
      )}
    </>
  );
}

export default App;
