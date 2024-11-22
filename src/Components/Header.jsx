import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header>
          <Navbar expand="lg">
              <Container className="justify-content-center">
                  <Navbar.Brand className="justify-content-center navHeader" href="#home">S H O P I F Y  -  M A R T</Navbar.Brand>
              </Container>
          </Navbar>
      </header>
  )
}

export default Header