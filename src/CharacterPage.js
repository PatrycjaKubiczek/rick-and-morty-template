import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

const Character = () => {
    let navigate = useNavigate();
    let params = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{errorMessage}</p>;
    }

    return (
        <>
            <Navbar />
            <Container maxW="md">
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
