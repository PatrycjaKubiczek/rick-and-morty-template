import {
    Button,
    Container,
    Divider,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
    useToast
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { StarIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledImg = styled.img`
    border-radius: 20px;
    width: 100%;
`;
const StyledHeading = styled(Heading)`
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Character = () => {
    let params = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFavorite, setFavourite] = useState(false);
    const toast = useToast();

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

        toast({
            title: 'Added to favourites',
            status: 'success',
            duration: 1200,
            isClosable: true
        });
    };
    const removeFromFavourites = (id) => {
        const favs = JSON.parse(localStorage['Favourites']);
        if (favs) {
            const newFavs = favs.filter((fav) => fav !== id);
            localStorage.setItem('Favourites', JSON.stringify(newFavs));
            setFavourite(false);
        }
        toast({
            title: 'Removed to favourites',
            status: 'error',
            duration: 1200,
            isClosable: true
        });
    };

    const {
        id,
        name,
        image,
        status,
        origin,
        location,
        episode,
        gender,
        type,
        species
    } = data;

    return (
        <Container mx="sm">
            <StyledImg src={image} alt={name} />
            <StyledHeading mt={4} mb={4}>
                {name}{' '}
                {isFavorite ? (
                    <Button
                        rightIcon={<StarIcon />}
                        colorScheme="teal"
                        variant="outline"
                        onClick={() => removeFromFavourites(id)}
                    >
                        Remove from favorites
                    </Button>
                ) : (
                    <Button
                        rightIcon={<StarIcon />}
                        colorScheme="teal"
                        variant="solid"
                        onClick={() => addToFavorite(id)}
                    >
                        Add to favorites
                    </Button>
                )}
            </StyledHeading>
            <Divider />
            <TableContainer>
                <Table variant="simple">
                    <Tbody>
                        <Tr>
                            <Td>status</Td>
                            <Td>{status}</Td>
                        </Tr>
                        <Tr>
                            <Td>gender</Td>
                            <Td>{gender}</Td>
                        </Tr>
                        <Tr>
                            <Td>species</Td>
                            <Td>{species}</Td>
                        </Tr>
                        <Tr>
                            <Td>type</Td>
                            <Td>{type}</Td>
                        </Tr>
                        <Tr>
                            <Td>location</Td>
                            <Td>{location.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>origin</Td>
                            <Td>{origin.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Episodes</Td>
                            <Td>{episode.length}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Character;
