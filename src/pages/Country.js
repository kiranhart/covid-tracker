import React, {useEffect, } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CountryStatList from '../components/CountryStatList';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesFetch } from '../redux/state/countryState';
import { filterCountries } from '../utils';


const Country = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation().pathname.split('/')[1];
    const countries = useSelector((state) => state.countries.countries);

    const country = filterCountries(countries, location);

    const handleBackButton = () => {
        navigate('/');
    };

    useEffect(() => {
        dispatch(getCountriesFetch());
    }, [dispatch]);

    return <StyledCountry>
        {country && <>
            <img src={country.countryInfo.flag} alt="" />
            <h1>{country.country}</h1>
            <button className='button' onClick={handleBackButton}>Back</button>
            <CountryStatList country={country} /> 
        </>
        }
    </StyledCountry>;
};

const StyledCountry = styled.div`
    margin-top: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        margin-top: 2rem;
        font-size: 2.5rem;
        font-weight: 400;
    }

    img {
        text-align: center;
        width: 450px;
    }

    hr {
        width: 90%;
        margin: 0 auto;
    }
`;

export default Country;
