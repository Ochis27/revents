import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import SignOutButtons from "./SignOutButtons";
import SignedInMenu from "./SignedInMenu";

export default function NavBar() {
  const [auth, setAuth] = useState(false);

  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo" />
          Re-vents
        </MenuItem>
        <MenuItem name="Events" as={NavLink} to="/events" />
        <MenuItem name="Scratch" as={NavLink} to="/scratch" />
        <MenuItem>
          <Button
            as={NavLink}
            floated="right"
            positive={true}
            inverted={true}
            content="Create event"
            to="/createEvent"
          />
        </MenuItem>
        {auth ? (
          <SignedInMenu setAuth={setAuth} />
        ) : (
          <SignOutButtons setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
}
