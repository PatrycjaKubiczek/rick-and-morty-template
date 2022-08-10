import React, { useEffect, useState } from 'react';

import Card from '../components/Card/Card';
import { Flex } from '@chakra-ui/react';

function HomePage() {
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
        <Flex wrap="wrap" align="center" justify="center" gap="3em">
            {characters.map((item) => (
                <Card
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                />
            ))}
        </Flex>
    );
}

export default HomePage;
