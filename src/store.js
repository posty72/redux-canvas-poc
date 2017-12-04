import { appReducers } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { rootEpic } from './epics';
import { applyMiddleware, createStore } from 'redux';

const epicMiddleware = createEpicMiddleware(rootEpic);

const logger = createLogger({
    predicate: (getState, action) => action.type !== 'INPUT__MOVEMENT'
});

export const store = createStore(
    appReducers,
    applyMiddleware(epicMiddleware, logger)
);
