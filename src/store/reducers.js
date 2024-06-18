import { combineReducers } from "redux";
import { appReducer, initialAppState } from '../layouts/App/reducer'

export const initialState = {
    app: initialAppState
}

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        app: appReducer,
        ...injectedReducers
    });
    return rootReducer;
}