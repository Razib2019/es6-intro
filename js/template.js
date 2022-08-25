// 3 Way declare String
const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

// Normal way to write multiple line text
const multiline = 'first line text \n' +
    'second line of code \n' +
    'Third line of text \n' +
    'Fourth line of string \n';
// console.log(multiline);


// Template String or backtick using benefit
// 1. Write multiple line text code easily
// 2. Can use dynamic value inside string
// Template String way or using backtick for writing multiple line text
const newMultiline = `First line of text
Second line of text
Third line of string
Fourth line of code
`;
// console.log(newMultiline);


// Can use dynamic value inside string using template string or backtick
const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);