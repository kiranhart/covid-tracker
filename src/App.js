import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import ThemeToggle from './components/ThemeToggle';

import Home from './pages/Home';
import Country from './pages/Country';

const App = () => {
    const isDark = useSelector((state) => state.theme.theme === 'dark');

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <BrowserRouter>
                <GlobalStyles />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:country" element={<Country />} />
                </Routes>
                <ThemeToggle />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
