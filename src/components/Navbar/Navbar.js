/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav``;

const Navbar = () => {
    return (
        <StyledNavbar>
            {/* <a className="navbar-brand" href="#">
                Navbar
            </a> */}
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/">home</Link>
                    <Link to="/#">Characters</Link>
                    <Link to="/#">Episodes</Link>
                    <Link to="/#">Locations</Link>
                </ul>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
