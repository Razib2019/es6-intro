// Function Declaration
/* function add(first, second) {
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result); */



/* const number = 56;
// function Expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
} */



// function expression with anonymous function
/* const add2 = function (first, second) {
    const total = first + second;
    return total;
} */


//Normal Function
function add4(first, second) {
    return first + second;
}

// Normal Function
const add5 = function (first, second) {
    return first + second;
}

// Arrow Function
const add6 = (first, second) => first + second;

const result = add6(10, 20);
console.log(result);