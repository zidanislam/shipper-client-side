import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "../Hooks/useFirebase";
import './Header.css'
const Header = () => {
  const { user, logOut, singInwithGoogle } = useFirebase();
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img className="w-sm-50 logo" src="https://i.ibb.co/McfMhjF/Shipper-removebg-preview.png" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            {
              user?.email?<Nav.Link as={Link} to="/additem">
              Add a item
            </Nav.Link>:""
            }

            <Nav.Link as={Link} to="/myorder">
              My Order
            </Nav.Link>
            {user?.email? <Nav.Link as={Link} to="/allorder">
              All Order manage
            </Nav.Link>:""}
            {user?.email ? (
              <Button onClick={logOut} variant="link">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button onClick={singInwithGoogle} variant="link">
                  Login
                </Button>
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
