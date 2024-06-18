import { call, put, takeLatest } from "redux-saga/effects";
import { GET_IDENTITY } from "./actionTypes"
import { setIdentity, setIdentityError } from './actions'
import axios from "axios";

export function* getIdentitySaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos/1')
        yield put(setIdentity({ identity: response.data }))
    } catch (error) {
        yield put(setIdentityError({ error: error.message }));

    }
}

export function* appWatcherSaga() {
    yield takeLatest(GET_IDENTITY, getIdentitySaga)
}