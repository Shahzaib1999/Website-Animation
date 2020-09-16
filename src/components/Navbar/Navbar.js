import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import './Navbar.css';

import Logo from '../../assets/logo.png';

export const NavbarCom = (props) => {
  return (
    <Container className="navbarContainer">
      <nav className="pt-2">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <img src={Logo} width={60} height={60} alt="logo" />
            <span className="brandName"> MUTIFY</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center navbarLink" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as="li" className="navLink">
                Works With
              </Nav.Link>
              <Nav.Link as="li" className="navLink">
                Noise Level
              </Nav.Link>
              <Nav.Link as="li" className="navLink">
                Switch Device
              </Nav.Link>
              <Nav.Link as="li" className="navLink">
                Feedback
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as="li" className="navLink">
              <Button className="downloadBtn">Download</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </Container>
  )
}
