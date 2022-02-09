import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from './Card';
import styled from 'styled-components';

const CountryCard = ({country}) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/${country.countryInfo.iso3}`);
    };

    return <Card>
        <StyledCountryCard onClick={handleRedirect}>
            <div className='flag'>
                <img src={country.countryInfo.flag} alt="" />
                <h3>{country.country}</h3>
            </div>
        </StyledCountryCard>
    </Card>;
};

const StyledCountryCard = styled.div`
    display: flex;
    flex-direction: column;

    :hover {
        cursor: pointer;
    }

    .flag {
        display: grid;
        grid-template-rows: 200px 1fr;
        height: 100%;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;

            &:hover {
                transform: scale(1.1);
                transition: all 0.3s ease-in-out;
            }
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
            margin-top: 1rem;
        }
    }
`;

export default CountryCard;
