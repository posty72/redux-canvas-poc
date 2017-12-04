class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    getCanvas() {
        return this.canvas;
    }
}


export const canvas = new Canvas().getCanvas();
