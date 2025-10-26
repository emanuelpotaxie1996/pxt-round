/**
 * Rounds any number perfectly
 * @param x number to round
 */
//% blockNamespace=Math
//% block="round $x" weight=0
function Round(x: number): number {
    if (x - Math.floor(x) === 0) {
        return x;
    } else {
        const dec: string = x.toString().split(".")[1];
        const arrDec: number[] = [];
        for (const v of dec) {
            arrDec.push(parseInt(v));
        }
        while (arrDec.length > 1) {
            if (arrDec.pop() > 4) {
                arrDec[-1]++;
            }
        }
        if (arrDec[0] < 5) {
            return Math.floor(x);
        } else {
            return Math.floor(x) + 1;
        }
    }
}
