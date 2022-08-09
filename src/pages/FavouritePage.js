import { Container, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Character = () => {
    const favouritesFromStorage = localStorage
        .getItem('Favourites')
        .split('')
        .filter(Number)
        .map((item) => parseInt(item))
        .sort();

    const [favouritesData, setFavouritesData] = useState([]);
    const [favouritesIDs] = useState(favouritesFromStorage);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchFavs = async () => {
            setLoading(false);
            setError(false);
            setErrorMessage('');
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/`
                );
                const responseData = await response.json();
                let newFavs = [];
                responseData.results.forEach((character) => {
                    if (favouritesIDs.includes(character.id)) {
                        newFavs.push(character);
                    }
                });
                setFavouritesData(newFavs);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            }
        };
        fetchFavs();
    }, [favouritesIDs]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{errorMessage}</p>;
    }

    return (
        <Container maxW="md">
            <Navbar />
            <Heading as="h1" size="xl">
                {favouritesData.length === 0
                    ? 'No favourites :('
                    : favouritesData.length +
                      ' favourite character' +
                      (favouritesData.length > 1 ? 's' : '')}

                {favouritesData.map((character) => (
                    <Link to={`/character/${character.id}`}>
                        <div key={character.id}>{character.name}</div>
                    </Link>
                ))}
            </Heading>
        </Container>
    );
};

export default Character;
