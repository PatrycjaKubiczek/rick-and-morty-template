import styled from 'styled-components';

const StyledCard = styled.div``;

const Card = ({ name, image }) => {
    return (
        <StyledCard>
            <img src={image} alt={name} />
            <p>{name}</p>
        </StyledCard>
    );
};

export default Card;
