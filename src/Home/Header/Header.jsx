import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import flag from '../../Picture/flag.svg';
import './header.css'

const Header = () => (
    <Navbar expand="lg" className='Navbar'>
        <Navbar.Brand href="#home"><h2 className='Brand'>trainline</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
            <Nav.Link href="#home">
                <div className='LinkLangue'>
                    <img src={flag}  className='Img' alt="flag"/>
                    <p className='Langue'>FR / EUR</p>
                </div>
            </Nav.Link>
            <Nav.Link href="#link" className='Link'>Business</Nav.Link>
            <Nav.Link href="#link" className='Link'>Aide</Nav.Link>
            <Nav.Link href="#link" className='Link'>Achat</Nav.Link>
            <Nav.Link href="#link">
                <div className='LinkAccount'>
                    <p className='CreateAccount'>Créer un compte</p>
                    <button style={{fontWeight:'bold'}} className='btn btn-light btn-sm'>Se connecter</button>
                </div>
            </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
