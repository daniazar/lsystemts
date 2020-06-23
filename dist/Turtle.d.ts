import { Point } from "./Point";
export declare class Turtle {
    private _position;
    private _angle;
    private _color;
    private _context;
    private _width;
    constructor(canvas: HTMLCanvasElement, startingPosition?: Point);
    setPosition(position: Point): void;
    fordward(distance: any): void;
    backward(distance: any): void;
    rotate(angle: number): void;
    private radians;
}
