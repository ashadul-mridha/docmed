import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
// 

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" bg="white">
            <Container>
            <img src={'https://i.ibb.co/TKkZsvQ/download.webp'} alt="" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Link to="/login"> <button className="btn btn-primary me-3">Login</button> </Link>
                    <Link to="/register"> <button className="btn btn-danger">Register</button> </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;