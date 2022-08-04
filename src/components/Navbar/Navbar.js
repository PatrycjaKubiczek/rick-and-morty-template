/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from 'styled-components';

const StyledNavbar = styled.nav``;

const Navbar = () => {
    return (
        <StyledNavbar>
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home/Dashboard{' '}
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Random character
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Favourites
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Test 3
                        </a>
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
