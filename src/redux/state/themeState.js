import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
    },
    reducers: {
        setDarkMode: (state) => {
            state.theme = 'dark';
        },
        setLightMode: (state) => {
            state.theme = 'light';
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
});

export const { setDarkMode, setLightMode, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;