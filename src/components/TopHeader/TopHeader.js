import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav,Navbar} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

export default class TopHeader extends Component {
    render() {
        return (
                <Navbar collapseOnSelect bg="dark" variant="dark" expand ='sm' className ='px-4' >
                    <Link to ='/' className = 'navbar-brand'>Dashboard</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as = {Link} eventKey="0"  to = '/' className ='nav-link'>Resumo</Nav.Link> 
                            <Nav.Link as = {Link} eventKey="1"  to = '/appointments' className ='nav-link'>Consultas</Nav.Link>
                            <Nav.Link as = {Link} eventKey="2"  to = '/income' className ='nav-link'>Faturamento</Nav.Link>
                        </Nav>
                    </NavbarCollapse>  
                </Navbar>
            
        )
    }
}
