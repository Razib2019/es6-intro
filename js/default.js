/* function add(first, second) {
    console.log(first, second);
    // second = second || 0;
    //  if (second === undefined) {
    //      second = 0;
    //  }
    const total = first + second;
    return total;
} */


// Default Parameters
/* function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}
const result = add();
console.log(result); */



/* function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result); */



function fullName(first, last = 'chowdhury') {
    const fullName = first + ' ' + last;
    return fullName;
}

const result = fullName('Aslam');
console.log(result);