import React from 'react';
import styled from 'styled-components';

const Card = ({children}) => {
    return <StyledCard className='card'>{children}</StyledCard>;
};

const StyledCard = styled.div`
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

export default Card;
