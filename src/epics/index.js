import { clickEpic } from './clicks';
import { combineEpics } from 'redux-observable';
import { movementEpic } from './movement';

export const rootEpic = combineEpics(
    clickEpic,
    movementEpic,
);
