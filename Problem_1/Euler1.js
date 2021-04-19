//Multiples of 3 and 5

/*
*
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
*
* The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
*
 */

export function euler1(limit) {
    let multiple = 0;
    for (let x = 1; x < limit; x++) {
        if (x % 3 == 0 || x % 5 == 0) {multiple += x};
    }
    return multiple;
}