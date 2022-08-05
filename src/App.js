import './App.css';

import { Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [characters, setCharacters] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                const data = actualData.results;
                console.log(data);
                setCharacters(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setCharacters(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading... A moment please.</div>;
    }
    if (error) {
        return (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        );
    }
    if (!characters) {
        return <div>No characters found</div>;
    }

    return (
        <Container maxW="1200px">
            <Navbar />
            <Header />
            <Flex wrap="wrap">
                {characters.map((item) => (
                    <Grid gap={5}>
                        <GridItem mb={4}>
                            <Card
                                key={item.id}
                                name={item.name}
                                image={item.image}
                            />
                            <Button colorScheme="teal" size="xs">
                                <Link to={`/character/${item.id}`}>
                                    show more
                                </Link>
                            </Button>
                        </GridItem>
                    </Grid>
                ))}
            </Flex>
        </Container>
    );
}

export default App;
