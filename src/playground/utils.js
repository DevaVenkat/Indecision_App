// ------------------------------------------------------------------------------------------
//test program from app.js for exports exercise
// import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 20));

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(isAdult(18));
// console.log(canDrink(20));
// console.log(isSenior(63));

// install -> import -> use

//------------------------------------------------------------------------------------------

console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;

// export { square, add, subtract as default };

// exports - default export - named exports
