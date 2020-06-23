import { Example } from "./Example";
import { Options } from "./Options";
import { Rule } from "./Rule";

export class Examples {
    // examples taken from
    // http://www.algorytm.org/fraktale/l-systemy.html

    public static SierpinskiTriangle(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 120;
        var iterations = 3;
        var color = 'black';
        var length = 25;
        var id = 'sierpinski-triangle';
        var name = 'Sierpinski Triangle';
        var axiom = 'X+X+X';
        rules.push(new Rule('X', false, 'XF+XF-XF-XF+XF'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }


    public static KochSnowflake(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 60;
        var iterations = 4;
        var color = 'black';
        var length = 3;
        var id = 'koch-snowflake';
        var name = 'Koch Snowflake';
        var axiom = 'X++X++X';
        rules.push(new Rule('X', false, 'XF-XF++XF-XF'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }

    public static HilbertCurve(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 90;
        var iterations = 4;
        var color = 'black';
        var length = 15;
        var id = 'hilbert-curve';
        var name = 'Hilbert Curve';
        var axiom = 'X';
        rules.push(new Rule('X', false, '-YF+XFX+FY-'));
        rules.push(new Rule('Y', false, '+XF-YFY-FX+'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }

    public static MoorCurve(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 90;
        var iterations = 4;
        var color = 'black';
        var length = 12;
        var id = 'moor-curve';
        var name = 'Moor Curve';
        var axiom = 'XFX+F+XFX';
        rules.push(new Rule('X', false, '-YF+XFX+FY-'));
        rules.push(new Rule('Y', false, '+XF-YFY-FX+'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }

    public static PeanoCurve(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 90;
        var iterations = 3;
        var color = 'black';
        var length = 12;
        var id = 'peano-curve';
        var name = 'Peano Curve';
        var axiom = 'X';
        rules.push(new Rule('X', false, 'XFYFX+F+YFXFY-F-XFYFX'));
        rules.push(new Rule('Y', false, 'YFXFY-F-XFYFX+F+YFXFY'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }

    public static HeighwayDragon(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 90;
        var iterations = 3;
        var color = 'black';
        var length = 12;
        var id = 'heighway-dragon';
        var name = 'Heighway Dragon';
        var axiom = 'X';
        rules.push(new Rule('X', false, 'X+YF+'));
        rules.push(new Rule('Y', false, '-FX-Y'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }

    public static LevyDragon(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 45;
        var iterations = 10;
        var color = 'black';
        var length = 2;
        var id = 'levy-dragon';
        var name = 'Levie Dragon';
        var axiom = 'X';
        rules.push(new Rule('X', false, '+XF--XF+'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }

    public static Pentadendryt(): Example {
        var rules: Rule[] = [];
        var speed = -1;
        var angle = 72;
        var iterations = 4;
        var color = 'black';
        var length = 4;
        var id = 'pentadendryt';
        var name = 'Pentadendryt';
        var axiom = 'X';
        rules.push(new Rule('X', false, 'XF+XF-XF--XF+XF+XF'));
        return new Example(id,
            name,
            axiom,
            rules,
            new Options(speed, angle, iterations, color, length));
    }
}
