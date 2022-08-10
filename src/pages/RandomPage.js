import { Button, Center, Container, Heading } from '@chakra-ui/react';

import { useState } from 'react';

const RandomPage = () => {
    const [randomCharacter, setRandomCharacter] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getRandomCharacter = async () => {
        setLoading(true);
        setError(false);
        setErrorMessage('');
        let randomInt = Math.floor(Math.random() * 20) + 1;
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${randomInt}`
            );
            const responseData = await response.json();
            setRandomCharacter(responseData);
            setLoading(false);
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    if (error) {
        return <p>{errorMessage}</p>;
    }

    return (
        <Container mx="sm">
            <Center>
                <Button onClick={() => getRandomCharacter()} mb="4">
                    Get Random Character
                </Button>
            </Center>

            <div>
                {randomCharacter && (
                    <>
                        <Heading as="h4" size="md" mb="4">
                            Random Character:
                        </Heading>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>{randomCharacter.name}</p>
                        )}
                    </>
                )}
            </div>
        </Container>
    );
};

export default RandomPage;
