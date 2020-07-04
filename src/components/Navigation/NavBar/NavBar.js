import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar;
