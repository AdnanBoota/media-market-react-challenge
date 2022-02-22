import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './header.component.css';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="./logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Github
                </Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;