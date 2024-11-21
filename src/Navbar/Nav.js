/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import mortarboard from "./icon.svg";

function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/Home">
          <img
            alt="mortarboard icon"
            src={mortarboard}
            width="30"
            height="30"
            className="d-inline-block align-top "
          />{" "}
          <span className="text-warning">eduExp</span>
          <h6 className="text-secondary">Education Expenses</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill variant="tabs" className="container">
            <Nav.Link as={Link} to="/Home" className="text-light">
              Home
            </Nav.Link>
            <NavDropdown title="Dat page" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Dat" className=" text-center">
                Dat Sub_Page
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-center ">
                Placeholder for items
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-center">
                Width = content width
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Raghad" className="text-light">
              {" "}
              Raghad Page
            </Nav.Link>
            <Nav.Link as={Link} to="/Russ" className="text-light">
              Russ Page
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavMenu;
