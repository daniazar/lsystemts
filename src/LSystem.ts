import { Turtle } from "turtle-ts";
import { Options } from "./Options";
import { Rule } from "./Rule";

export class LSystem {

    private _axiom: string;
    private _rules: Rule[] = [];
    protected _elem;
    protected _options: Options;
    protected _turtle: Turtle;

    public constructor(axiom: string, rules: Rule[], options: Options, turtle: Turtle) {
        this._axiom = axiom;
        this._options = options;
        for (let rule of rules) {
            this._rules[rule.letter] = rule;
        }
        this._turtle = turtle;
    }

    public start() {
        this._turtle.setColor(this._options.color);
        this.iterateAxiom(this._axiom, this._options.iterations);
    }

    public iterateAxiom(axiom: string, iterations: number) {
        if (iterations == 0) return;
        for (let c of axiom) {
            switch (c) {
                case '+': this._turtle.right(this._options.angle); break;
                case '-': this._turtle.left(this._options.angle); break;
                case 'F': this._turtle.forward(length); break;
                case 'f': this._turtle.penUp(); this._turtle.forward(length); this._turtle.penDown(); break;
                default: {
                    // for small letters just go forward
                    // without drawing
                    if (c.toLowerCase() === c) {
                        let rule = this._rules[c.toUpperCase()];
                        this.iterateAxiom(rule.axiom, iterations - 1);
                    }
                    // for big letters go forward and draw
                    else if (c.toUpperCase() === c) {
                        let rule = this._rules[c.toUpperCase()];
                        this.iterateAxiom(rule.axiom, iterations - 1);
                    }
                }
            }
        }
    }
    public using(elem) {
        this._elem = elem;
    }
}
