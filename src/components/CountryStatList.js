import React from 'react';
import Grid from './UI/Grid';
import StatCard from './UI/StatCard';

import { formatNumber } from '../utils';

const CountryStatList = ({country}) => {
    return <Grid cols={3} colsMd={2} colsSm={1}>
        <StatCard title="Total Cases" info={formatNumber(country.cases)} />
        <StatCard title="Active Cases" info={formatNumber(country.active)} />
        <StatCard title="Total Recoveries" info={formatNumber(country.recovered)} />
        <StatCard title="Total Deaths" info={formatNumber(country.deaths)} />
        <StatCard title="Critical Cases" info={formatNumber(country.critical)} />
        <StatCard title="Tests" info={formatNumber(country.tests)} />
    </Grid>;
};

export default CountryStatList;
