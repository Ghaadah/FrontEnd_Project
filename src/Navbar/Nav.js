/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap"; 
// import Container from "react-bootstrap/Container";
import {Nav, Navbar,NavDropdown,Container }from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import mortarboard from "./icon.svg";



function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/Home">
          <img
            alt="mortarboard logo black and white"
            src={mortarboard}
            width="30"
            height="30"
            className="d-inline-block align-top" />{" "}
          eduExp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <NavDropdown title="Dat page" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Dat">Dat Sub_Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Placeholder
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Raghad"> Raghad Page</Nav.Link>
            <Nav.Link as={Link} to="/Russ">Russ Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavMenu;
