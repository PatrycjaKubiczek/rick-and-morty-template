import { Box, Button, Center, Heading } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Card = ({ name, image, id }) => {
    return (
        <Link to={`/character/${id}`}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="column"
            >
                <img src={image} alt={name} style={{ borderRadius: '5px' }} />
                <Heading as="h4" size="md" mt={2} mb={4}>
                    {name}
                </Heading>
                <Center>
                    <Button colorScheme="teal" size="xs" mt={2}>
                        show more
                    </Button>
                </Center>
            </Box>
        </Link>
    );
};

export default Card;
