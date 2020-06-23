import { Options } from "./Options";
import { Rule } from "./Rule";

export class Example {
    id: string;
    name: string;
    axiom: string;
    rules: Rule[];
    options: Options;

    constructor(id: string,
        name: string,
        axiom: string,
        rules: Rule[],
        options: Options
    ) {
    }

}
