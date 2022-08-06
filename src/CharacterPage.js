import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Container
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { StarIcon } from '@chakra-ui/icons';

const Character = () => {
    let navigate = useNavigate();
    let params = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFavorite, setFavourite] = useState(false);

    const checkIfFavourite = (id) => {
        const favouritesInStorage = localStorage.getItem('Favourites');
        if (favouritesInStorage) {
            const favouritesArr = JSON.parse(favouritesInStorage);
            if (favouritesArr.includes(id)) {
                setFavourite(true);
            }
            return;
        }
        setFavourite(false);
        return false;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            setErrorMessage('');
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/${params.characterId}`
                );
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [params.characterId]);

    useEffect(() => {
        checkIfFavourite(data.id);
    }, [data.id]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{errorMessage}</p>;
    }
    const addToFavorite = (id) => {
        let favs = JSON.parse(localStorage.getItem('Favourites')) || [];
        favs.push(id);
        localStorage.setItem('Favourites', JSON.stringify(favs));
        setFavourite(true);
    };
    const removeFromFavourites = (id) => {
        const favs = JSON.parse(localStorage['Favourites']);
        if (favs) {
            const newFavs = favs.filter((fav) => fav !== id);
            localStorage.setItem('Favourites', JSON.stringify(newFavs));
            setFavourite(false);
        }
    };

    return (
        <>
            <Navbar />
            <Container maxW="md">
                {isFavorite ? (
                    <Button
                        rightIcon={<StarIcon />}
                        colorScheme="teal"
                        variant="outline"
                        onClick={() => removeFromFavourites(data.id)}
                    >
                        Remove from favorites
                    </Button>
                ) : (
                    <Button
                        rightIcon={<StarIcon />}
                        colorScheme="teal"
                        variant="solid"
                        onClick={() => addToFavorite(data.id)}
                    >
                        Add to favorites
                    </Button>
                )}

                <img src={data.image} alt={data.name} />
                <h1>{data.name}</h1>
                <p>{data.status}</p>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    show more info
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <p>Species: {data.species}</p>
                            <p>Type: {data.type}</p>
                            <p>Gender: {data.gender}</p>
                            <p>Location: {data.location.name}</p>
                            <p>Origin: {data.origin.name}</p>
                            <p>Episodes: {data.episode.length}</p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </>
    );
};

export default Character;
