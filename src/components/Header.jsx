import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

function Header() {

 
    
  return (
    <Navbar bg="light" variant="light" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home"><span style={{ fontSize: '40px', fontWeight: 'bold',color:'#DEB887',border:'none' }}>X</span>ylem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='navb' >Home</Nav.Link>
            <Nav.Link href="#courses" className='navb' >About</Nav.Link>
            <Nav.Link href="#about" className='navb' >Courses</Nav.Link>
            <Nav.Link href="#contact" className='navb' >Contact</Nav.Link>
          </Nav>
          <form className="d-flex">
            <input   className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <Nav className="ml-auto">
          <div className='button-center'>
        <button id='button'>Get Started</button></div>          
          </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;