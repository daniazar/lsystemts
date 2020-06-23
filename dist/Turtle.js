"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turtle {
    constructor(canvas, startingPosition) {
        this._position = startingPosition;
        this._context = canvas.getContext("2d");
        if (!startingPosition) {
            //this._position = context.
        }
    }
    setPosition(position) {
        this._position = position;
        this._context.moveTo(this._position.x, this._position.y);
    }
    fordward(distance) {
        const x = this._position.x + distance * Math.cos(this._angle);
        const y = this._position.y + distance * Math.sin(this._angle);
    }
    backward(distance) {
        this.fordward(-distance);
    }
    rotate(angle) {
        this._angle += this.radians(angle);
    }
    radians(angle) {
        return angle * (Math.PI * 2 / 360);
    }
}
exports.Turtle = Turtle;
