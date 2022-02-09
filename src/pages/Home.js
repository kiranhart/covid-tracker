import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getCountriesFetch } from '../redux/state/countryState';

import styled from 'styled-components';
import Grid from '../components/UI/Grid';
import StatCard from '../components/UI/StatCard';
import CountryCard from '../components/UI/CountryCard';
import CountryStatList from '../components/CountryStatList';

import useFetch from '../hooks/useFetch';
import { WORLDWIDE_DATA } from '../constants/links';
import { formatNumber, convertTime, filterCountries } from '../utils';


const Home = () => {
    const dispatch = useDispatch();
    const [userCountry, setUserCountry] = useState('Canada');
    const [userCountryData, setUserCountryData] = useState();

    const data = useFetch(WORLDWIDE_DATA);
    const userLocation = useFetch('https://ipapi.co/json/');
    const countries = useSelector((state) => state.countries.countries);

    useEffect(() => {
        if (userLocation.length > 0) {
            setUserCountry(userLocation.country_name);
        }
        setUserCountryData(filterCountries(countries, userCountry));
    }, [userLocation, countries, userCountry]);

    useEffect(() => {
        dispatch(getCountriesFetch());
    }, [dispatch]);

    return <StyledHome>
        {userCountryData && <>
            <Grid cols={3} colsMd={3} colsSm={1}>
                <h2 className="header">Stats for {userCountry}</h2>
            </Grid>
            <CountryStatList country={userCountryData} />
            <hr />
        </>}  
      
        <Grid cols={3} colsMd={2} colsSm={1}>
            <h2 className="header">Global Statistics</h2>
        </Grid>
        {data && <Grid cols={4} colsMd={2} colsSm={1}>
            <StatCard title="Total Cases" info={formatNumber(data.cases)} />
            <StatCard title="Active Cases" info={formatNumber(data.active)} />
            <StatCard title="Total Recoveries" info={formatNumber(data.recovered)} />
            <StatCard title="Total Deaths" info={formatNumber(data.deaths)} />
            <StatCard title="Cases Today" info={formatNumber(data.todayCases)} />
            <StatCard title="Tests" info={formatNumber(data.tests)} />
            <StatCard title="Affected Countries" info={formatNumber(data.affectedCountries)} />
            <StatCard title="Last Updated" info={convertTime(data.updated/1000)} />
        </Grid>}
        <hr />
        <Grid cols={3} colsMd={2} colsSm={1}>
            <h2>Available Countries</h2>
        </Grid>
        <Grid cols={6} colsMd={2} colsSm={1}>
            {countries.map((country, index) => <CountryCard key={country.country + index} country={country} />)}
        </Grid>
    </StyledHome>;
};

const StyledHome = styled.div`
    .header {
        margin-top: 2rem;
    }

    hr {
        width: 90%;
        margin: 0 auto;
    }
`;


export default Home;
