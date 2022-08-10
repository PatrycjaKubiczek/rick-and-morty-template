import { Container } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <Container maxW="1100px">
            <Navbar />
            <main>{children}</main>
        </Container>
    );
};
export default Layout;
