// import { SQUARE__MOVE } from '../actions/square';

const INITIAL_STATE = {
    width: 15,
    height: 15,
    color: '#F00',
    x: 0,
    y: 0,
    isMoving: true
};

export function squareReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INPUT__MOVEMENT':
            return move(state, action);
        case 'INPUT__CLICK':
            return click(state, action);
        default:
            return state;
    }
}

function click(state, action) {
    if (state.isMoving === true) {
        return {
            ...state,
            isMoving: false
        };
    }

    if (state.x <= action.payload.x &&
        state.x + state.width > action.payload.x &&
        state.y <= action.payload.y &&
        state.y + state.height >= action.payload.y) {
        return {
            ...state,
            isMoving: true
        };
    }

    return state;
}

function move(state, action) {
    if (state.isMoving === true) {
        return {
            ...state,
            x: action.payload.x,
            y: action.payload.y
        };
    }

    return state;
}
