// Two Parameter Arrow Function Look Like
const add = (first, second) => first + second;
const getFullName = (first, second) => first + '' + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
// console.log(result);



// Multiple parameter arrow function look like
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;


// No parameter arrow function look like
const gerPie = () => 3.14;


// One Paramater Arrow function look like
const doubleIt = (num) => num * 2;


// Another Exaple Of One parameter arrow function look like
const fiveTimes = num => num * 5;


// Multi Line Arrow Function Look Like
// If you want to return something, Use the return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}