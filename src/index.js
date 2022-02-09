import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';

import themeReducer from './redux/state/themeState';
import countriesReducer from './redux/state/countryState';
import countriesSaga from './redux/sagas/countrySaga';

const saga = createSagaMiddleware();
const mainStore = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer
    },
    middleware: [saga],
});

saga.run(countriesSaga);

ReactDOM.render(
    <Provider store={mainStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);