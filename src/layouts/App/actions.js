import { GET_IDENTITY, SET_IDENTITY, SET_IDENTITY_ERROR } from "./actionTypes";

/** ACTIONS.JS */
export const getIdentity = () => ({
    type: GET_IDENTITY
});

export const setIdentity = ({ identity }) => ({
    type: SET_IDENTITY,
    identity
});

export const setIdentityError = ({ error }) => ({
    type: SET_IDENTITY_ERROR,
    error
});