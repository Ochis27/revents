import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import { signOut } from "../../../features/auth/authSlice";

export default function SignedInMenu() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSignedOut() {
    dispatch(signOut());
    navigate("/");
  }
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="assets/user.png" />
      <Dropdown pointing="top left" text={currentUser?.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create event"
            icon="plus"
          />
          <Dropdown.Item to="/createEvent" text="My Profile" icon="user" />
          <Dropdown.Item
            onClick={handleSignedOut}
            to="/createEvent"
            text="Sign out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
