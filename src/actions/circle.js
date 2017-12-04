export const CIRCLE__MOVE = 'CIRCLE__MOVE';

export function move(x, y) {
    return {
        type: CIRCLE__MOVE,
        payload: {
            x, y
        }
    };
}
