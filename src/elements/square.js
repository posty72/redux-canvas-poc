import * as squareActionCreators from '../actions/square';
import { store } from '../store';

export class Square {
    constructor(state, canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.draw(state);

        store.dispatch({ type: 'SQUARE__MOVE_START' });
    }

    handleClick() {
        store.dispatch(squareActionCreators.move(0, 0)); // eslint-disable-line
    }

    draw(state) {
        const ctx = this.ctx;
        const { color, width, height, x, y } = state;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
}
