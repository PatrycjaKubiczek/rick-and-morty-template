/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from 'styled-components';

const StyledCard = styled.div``;

const Card = () => {
    return (
        <StyledCard>
            <img
                src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                alt="Morty Smith"
            />
            <p>Morty Smith</p>
        </StyledCard>
    );
};

export default Card;
