import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavHead = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Smit Eatries</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id=" responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHead;
