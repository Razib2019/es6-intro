// Object Destructuring
/* const fish = {
    name: 'king Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
}

const { address } = fish;
console.log(address); */

/* const phone = fish.phone;
const color = fish.color;
const price = fish.price; */

/* const { phone } = fish;
console.log(phone); */

/* const { age, name } = { name: 'Almas', age: 56, profession: 'makeup artist' };
console.log(age); */

// Array Destructring
/* const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king, notun); */

// Function Destructring
function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);