//JavaScript Strings Introduction

let name = 'Allan';
let greetings = `Hello ${name}`; //ES6 Introduced usage of back ticks to define strings
console.log(greetings);

//getting the length of strings
let str = "Hello Family";
console.log(str.length);

console.log(str[2]); //accessing characters of the string

console.log(str[str.length - 1]); //access last character of the string

//concatenate string with + operator
let person = 'John';
let message = 'Hello ' + person;

console.log(message);

// JS String type
let myStr = new String("Hello Allan");

//to get the primitive string value, use one of the following mtds.
console.log(myStr.valueOf());
console.log(myStr.toString());
console.log(myStr.toLocaleString());

//String manipulation

//concat() mtd
let firstname = 'Nandweza';
let fullName = firstname.concat(' ', 'Allan'); // + opearator is more often used to concat str.
console.log(firstname);
console.log(fullName);

//substring() mtd; accepts 2arg. startIndex & length.
let mySubStr = 'Alexander';
console.log(mySubStr.substring(0, 5));

//indexOf() mtd, returns the first occurence of the substr
console.log(mySubStr.indexOf('xander'));

//lastIndexOf() mtd
console.log(mySubStr.lastIndexOf('Alexa'));

//toLocaleLowerCase(), toLocaleUpperCase() mtds
console.log(mySubStr.toLocaleLowerCase());
console.log(mySubStr.toLocaleUpperCase());

//localeCompare() mtd,
console.log('A'.localeCompare('B'));
console.log('B'.localeCompare('B'));
console.log('C'.localeCompare('B'));

//match() mtd, matches a string with a specified regular expression & get an array of results
let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/);
console.log(matches[0]);

matches = expr.match(/\d+/g);
matches.forEach((m) => {
    console.log(m);
})

//replace() mtd

let mystr = 'the baby kicks the ball';

let newstr = mystr.replace(/the/g, "a"); //replace the with a
let finalStr = mystr.replace('kicks', 'holds'); //replace kicks with holds
console.log(newstr);
console.log(finalStr);
