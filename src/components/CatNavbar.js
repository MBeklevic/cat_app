import React, { useState } from 'react';
import CatList from './CatList';
import { Link } from 'react-router-dom';
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
                <NavbarBrand href="/cat_app"><h1 className='me-2 brand ms-4' style={{ color: '#10A19D', display: "inline-block" }}>Cat APP</h1>
                    <FontAwesomeIcon icon={faPaw} size="2x" color='#10A19D' />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        {CatList.map(cat => (
                            <NavItem key={cat.id}>
                                <Link to={`/cat_app/${cat.kind}/`} onClick={toggle} ><NavLink className='brand' style={{ color: '#10A19D' }}>{cat.name}</NavLink></Link>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default CatNavbar;