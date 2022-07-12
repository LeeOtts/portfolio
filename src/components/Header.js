import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/img/white-logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='lg'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Logo} alt='logo' className='logo' />
                {/* <h1 className='mt-1'>Coding with Whiskey</h1> */}
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/webdev'>
                            <i className="fa-solid fa-laptop-code"></i> Web Dev
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/photography'>
                            <i className='fa-solid fa-camera fa-lg' /> Photography
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/videography'>
                            <i class='fa-solid fa-camera-movie fa-lg' /> Videography
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/threedprinting'>
                            <i className='fa-brands fa-unity fa-lg' /> 3d Printing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/inthenews'>
                            <i className='fa-solid fa-newspaper fa-lg' /> In The News
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa-solid fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;