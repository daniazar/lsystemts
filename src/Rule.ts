
export class Rule {
    letter: string;
    axiom: string;
    isColor: boolean;


    constructor(letter: string, isColor: boolean, axiom: string) {
        this.letter = letter;
        this.axiom = axiom;
        this.isColor = isColor;
    }
}