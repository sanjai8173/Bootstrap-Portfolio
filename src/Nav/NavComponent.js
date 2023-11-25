import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';

function NavComponent() {
  return (
    <div className="ndiv">
      <Navbar className="p-2 text-light" id="nava" bg="black" variant="dark" expand="lg">
        <div className="container d-flex align-items-center">
          <Navbar.Brand href="#">
            <p className="mb-0" >Portfolio</p>
          </Navbar.Brand>
          <Navbar.Toggle
  aria-controls="navbar-nav" className="rounded"
  style={{
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px',
    margin: '5px',
    color: 'transparent',
  }}
/>
          <Navbar.Collapse id="collapse-content">
            <Nav style={{ marginLeft: 'auto' }}>
              <Nav.Link as={NavLink} to="/" className="ml-2">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="ml-2">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/work" className="ml-2">
                Works
              </Nav.Link>
              <Nav.Link as={NavLink} to="/aboutme" className="ml-2">
                About Me
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contactme" className="ml-2">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet className="Outlet" />
    </div>
  );
}

export default NavComponent;
