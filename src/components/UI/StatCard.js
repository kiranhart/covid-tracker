import React from 'react';

const StatCard = ({title, info}) => {
    return <div className='card stat-card'>
        <h3>{title}</h3>
        <h1>{info}</h1>
    </div>;
};

export default StatCard;
