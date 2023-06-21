/*Given the starting code of:

x = 1
y = 2
Write a block of code that will print out the largest value.

Using the given values as an example, your code should print out 2.

To verify your code is working properly, try and change the values of x and y.

As an additional challenge, print out The values are identical. if x and y have the same value.
*/

let x = 5
let y = 5

function MaxOfTwo(a, b) {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else return (`both ${a} and ${b} are identical`)
}
console.log(MaxOfTwo(x, y))