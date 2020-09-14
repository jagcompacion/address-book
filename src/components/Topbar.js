import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const Topbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Contacts</Navbar.Brand>
    <Nav className="mr-auto" />
    <Button as={Link} to="/add-contact" variant="success">
      Create
    </Button>
  </Navbar>
);

export default Topbar;
