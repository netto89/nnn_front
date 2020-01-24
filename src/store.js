import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as reducers from './reducers'
import sagas from './sagas'

const combinedReducers = combineReducers(Object.assign({}, reducers))
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)