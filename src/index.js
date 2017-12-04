import { canvas } from './canvas';
import { Circle } from './elements/circle';
import { Square } from './elements/square';
import { store } from './store';


// Initialise our drawing
const square = new Square(store.getState(), canvas);
const circle = new Circle(store.getState(), canvas);

function draw() {
    const ctx = canvas.getContext('2d');
    const {
        square: squareState,
        circle: circleState
    } = store.getState();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pass state and rerender
    square.draw(squareState);
    circle.draw(circleState);

    requestAnimationFrame(draw);
}

// Redraw constant
requestAnimationFrame(draw);
