import * as circleActionCreators from '../actions/circle';
import { store } from '../store';

export class Circle {
    constructor(state, canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.draw(state);

        store.dispatch({ type: 'CIRCLE__MOVE_START' });
        store.dispatch({ type: 'CLICKS' });
    }

    handleClick() {
        store.dispatch(circleActionCreators.move(10, 10)); // eslint-disable-line
    }

    draw(state) {
        const ctx = this.ctx;
        const { color, width, x, y } = state;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, width, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(x + (width * 0.7), y);
        ctx.arc(x, y, width * 0.7, 0, Math.PI, false); // Mouth (clockwise)
        ctx.moveTo(x - width * 0.2, y - width * 0.2);
        ctx.arc(x - width * 0.3, y - width * 0.2, width * 0.1, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(x + width * 0.4, y - width * 0.2);
        ctx.arc(x + width * 0.3, y - width * 0.2, width * 0.1, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();
    }
}
