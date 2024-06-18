import { all } from "redux-saga/effects";
import { appWatcherSaga } from "../layouts/App/saga";

export default function* rootSaga() {
    yield all([appWatcherSaga()]);
}
