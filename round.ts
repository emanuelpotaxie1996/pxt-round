/**
 * Rounds any not integer number perfectly
 * @param number number to round
 */
//% blockNamespace=Math
//% block="round $number perfectly" weight="0"
function Round(number: number): number {
    if (Math.floor(number * 10) % 10 > 4) {
        return Math.floor(number) + 1;
    } else {
        const dec = number.toString().split(".")[1];
        const arr_dec = dec.split("").map(n => parseInt(n));
        while (arr_dec.length > 1) {
            if (arr_dec[arr_dec.length - 1] > 4) {
                arr_dec.pop();
                arr_dec[arr_dec.length - 1] = arr_dec[arr_dec.length - 1] + 1;
            } else {
                arr_dec.pop();
            }
        }
        if (arr_dec[0] < 5) {
            return Math.floor(number);
        } else {
            return Math.floor(number) + 1;
        }
    }
}
