import React from 'react';
import styled from 'styled-components';

const Grid = ({children, cols = 3, colsMd = 2, colsSm = 1}) => {
    return <StyledGrid cols={cols} colsmD={colsMd} colsSm={colsSm}>
        {children}
    </StyledGrid>;
};

const StyledGrid = styled.div`
    margin: 2rem auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(${({cols}) => cols}, 1fr);
    grid-gap: 1rem;

    @media(max-width: 1040px){
        grid-template-columns: repeat(${({colsMd}) => colsMd}, 1fr);
    } 

    @media(max-width: 540px){
        grid-template-columns: repeat(${({colsSm}) => colsSm}, 1fr);
    }  
`;

export default Grid;
