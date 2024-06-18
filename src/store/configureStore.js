import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import createSagaMiddlware from 'redux-saga'

import createReducer from './reducers'
import rootSaga from './rootSaga'

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
    stateTransformer: (state) => state,
    actionTransformer: (action) => action
})


const sagaMiddleware = createSagaMiddlware();

const configureStore = (initialState = {}) => {
    const middleware = [
        loggerMiddleware,
        sagaMiddleware
    ];

    const store = createStore(
        createReducer(),
        initialState,
        composeWithDevTools(applyMiddleware(...middleware)),

    )

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}
    store.injectedSagas = {}

    store.runSaga(rootSaga);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers))
        })
    }
    return store
};

export default configureStore