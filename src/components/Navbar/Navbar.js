/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, useColorMode } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    margin: 2rem 0;
`;

const StyledLink = styled(Link)`
    margin-right: 1rem;
`;

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <StyledNav>
            {/* <a className="navbar-brand" href="#">
                Navbar
            </a> */}
            <div id="navbarNav">
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/favourites">Favourites</StyledLink>
                <StyledLink to="/#">Episodes</StyledLink>
                <StyledLink to="/#">Locations</StyledLink>

                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </div>
        </StyledNav>
    );
};

export default Navbar;
