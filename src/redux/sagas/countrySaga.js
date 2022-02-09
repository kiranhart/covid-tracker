import { call, put, takeEvery } from 'redux-saga/effects';
import { getCountriesSuccess } from '../state/countryState';

import { COUNTRIES } from '../../constants/links';

function* workGetCountriesFetch() {
    const countries = yield call(() => fetch(COUNTRIES));
    const jsonCountries = yield countries.json();
    yield put(getCountriesSuccess(jsonCountries));
}

function* countrySaga() {
    yield takeEvery('countries/getCountriesFetch', workGetCountriesFetch);
}

export default countrySaga;