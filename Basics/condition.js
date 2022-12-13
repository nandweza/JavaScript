//if statement
num1 = 20;
num2 = 30;

if (num1 > num2) {
    console.log("Hello world!");
} else {
    console.log("You got it!");
}

//simple calculator
const num1 = parseFloat(prompt("Enter num1: "));
const op = prompt("Enter operator (either +, -, * or /): ");
const num2 = parseFloat(prompt("Enter num2: "));

let result;

if (op == '+') {
    result = num1 + num2;
} else if (op == '-') {
    result = num1 - num2;
} else if (op == '*') {
    result = num1 * num2;
} else {
    result = num1 / num2;
}

console.log(`${num1} ${op} ${num2} = ${result}`);

//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//lowercase alphabet
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
}

//uppercase
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
}

//fizz buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log('fizz');
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log('buzz');
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    } else {
        console.log(i);
    }
}

//return an array of products from elem of myArray
var myArray = [1, 2, 5, 8, 9, 3];
let product = [];

for (i = 0; i < myArray.length; i++) {
    product.push(myArray[i] * myArray[i + 1]);
}
console.log(Math.max(product));

//while loop
//prompts user to enter a + num, if - num is entered the loop breaks and returns the sum of the numbers.
let sum = 0;

let number = parseInt(prompt("Enter a number: "));

while (number >= 0) {
    sum += number;

    number = parseInt(prompt("Enter a number: "));
}
console.log(`The sum is ${sum}`);

//do while loop
let i = 0;
const n = 10;

do {
    console.log(i);
    i++;
} while (i <= n);

//break statement
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        break;
    }
    console.log(i);
}

let _sum = 0, num;

while (true) {
    num = parseInt(prompt("Enter number: "));

    if (num < 0) {
        break;
    }
    _sum += num;
}
console.log(`The sum is: ${_sum}`);

//continue statement
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        continue;
    }
    console.log(i);
}

//switch statement
let results;

const number1 = parseFloat(prompt("Enter number: "));
const op2 = prompt("Enter Operator: ");
const number2 = parseFloat(prompt("Enter number: "));

switch (op2){
    case '+':
        results = number1 + number2;
        console.log(`${results}`);
        break;

    case '-':
        results = number1 - number2;
        console.log(`${results}`);
        break;

    case '*':
        results = number1 * number2;
        console.log(`${results}`);
        break;

    case '/':
        results = number1 / number2;
        console.log(`${results}`);
        break;

    default:
        console.log("Invalid Operator!");
        break;
}