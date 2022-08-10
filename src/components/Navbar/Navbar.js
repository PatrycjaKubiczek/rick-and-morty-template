import { Button, Flex, Link, Spacer, useColorMode } from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled(Flex)`
    margin: 2rem 0;
`;

const StyledLink = styled(Link)`
    margin-right: 1rem;
`;

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <StyledNav>
            <StyledLink as={ReachLink} to="/">
                Home
            </StyledLink>
            <StyledLink as={ReachLink} to="/favourites">
                Favourites
            </StyledLink>
            <StyledLink as={ReachLink} to="/random">
                Random
            </StyledLink>
            <Spacer />
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </StyledNav>
    );
};

export default Navbar;
