import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/state/themeState';

import moonImage from '../assets/moon.svg';
import sunImage from '../assets/sun.svg';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    };

    return <StyledThemeToggle>
        {theme === 'light' && <img src={moonImage} alt='moon' onClick={toggleThemeHandler} />}
        {theme === 'dark' && <img src={sunImage} alt='sun' onClick={toggleThemeHandler} />}
    </StyledThemeToggle>;
};

const StyledThemeToggle = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 1rem;
    right: 1rem;
    width: 3.5rem;
    
    &:hover {
        cursor: pointer;
    }
`;


export default ThemeToggle;
