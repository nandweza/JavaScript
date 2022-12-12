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