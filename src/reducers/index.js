import { circleReducer } from './circle';
import { combineReducers } from 'redux';
import { squareReducer } from './square';

export const appReducers = combineReducers({
    square: squareReducer,
    circle: circleReducer
});
