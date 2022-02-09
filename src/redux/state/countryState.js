import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        loading: false,
    },
    reducers: {
        getCountriesFetch: (state) => {
            state.loading = true;
        },

        getCountriesSuccess: (state, action) => {
            state.countries = action.payload;
            state.loading = false;
        },

        getCountriesFailure: (state) => {
            state.loading = false;

        }
    }
});

export const { getCountriesFetch, getCountriesSuccess, getCountriesFailure } = countrySlice.actions;
export default countrySlice.reducer;