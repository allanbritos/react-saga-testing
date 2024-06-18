import { SET_IDENTITY, SET_IDENTITY_ERROR } from "./actionTypes";
import { stateKeys } from "./stateKeys";
/* REDUCER.JS */
export const initialAppState = {
    identity: null
}
export const appReducer = (state = initialAppState, { type, payload }) => {
    switch (type) {
        case SET_IDENTITY: {
            return {
                ...state,
                [stateKeys.identity]: payload
            }
        }
        case SET_IDENTITY_ERROR: {
            return {
                ...state,
                [stateKeys.identityError]: payload
            }
        }
        default: return state;

    }
}