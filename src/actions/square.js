export const SQUARE__MOVE = 'SQUARE__MOVE';

export function move(x, y) {
    return {
        type: SQUARE__MOVE,
        payload: {
            x, y
        }
    };
}
