import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar style={{ backgroundColor: "#00acc1"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ fontSize:20,  color: "white" }}>Movies App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" style={{ color: "white" }}>Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors" style={{ color: "white" }}>Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors" style={{ color: "white" }}>Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)} style={{ color: "white" }}>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;