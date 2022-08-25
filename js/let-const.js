// Breakup with var
// No More use of var
// let: let it to reassign
// const: don't allow it to reassign

/* let money = 25;
money = 35;
console.log(money); */

/* const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + ' potas potas';
console.log(message); */


const numbers = [12, 89, 65, 45];
//full value reassign is not allowed but partial value assignable
// numbers = [77, 66, 55, 22, 99];
/* numbers[1] = 90;
numbers.push(123);
console.log(numbers); */


//full value reassign is not allowed but partial value assignable
/* const student = {
    name: 'mofiz',
    address: 'Rongpur'
}
// student={name:'Mofazzol'}
student.name = 'Mofazzol';
console.log(student); */
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
    console.log(sum);

}
// console.log(number);
