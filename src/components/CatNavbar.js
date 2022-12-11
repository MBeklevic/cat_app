import React, { useState } from 'react';
import CatList from './CatList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import "../styles/CatNavbar.css"

function CatNavbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...props}  >
                <NavbarBrand href="/"><h1 className='me-2 brand ms-4' style={{ color: '#10A19D', display: "inline-block" }}>Cat APP</h1>
                    <FontAwesomeIcon icon={faPaw} size="2x" color='#10A19D' />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        {CatList.map(cat => (
                            <NavItem key={cat.id}>
                                <NavLink className='brand' style={{ color: '#10A19D' }} href={`/${cat.kind}/`}>{cat.name}</NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default CatNavbar;