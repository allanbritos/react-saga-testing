import { createSelector } from "reselect";
import { stateKeys } from "./stateKeys";
/** SELECTORS.JS */
export const getAppStateSelector = (state) => state.app

export const getIdentitySelector = () => {
    createSelector(getAppStateSelector, (appState) => appState[stateKeys.identity])
}
