export class Options {
    speed: number;
    angle: number;
    iterations: number;
    color: string;
    length: number;

    constructor(speed: number, angle: number, iterations: number, color: string, length: number) {
        this.speed = speed;
        this.angle = angle;
        this.iterations = iterations;
        this.color = color;
        this.length = length;
    }
}
