//JS Arrays
//JS Arrays refers to an ordered list of values.
//JS Array's length is dynamically sized & auto-growing.
//JS Array can hold values of different types

//creating array

let myArray = new Array(); //we can also omit the new keyword

let myArray2 = []; //most prefered mtd of creating arrays.

//we use indexs to access array elem,

myArray2 = ['life', 'is', 'good'];

console.log(myArray2[1]); //returns elem at index 1; 'is'

//push(), used to add an elem at the end of the array

let people = ['allan', 'joel', 'mildred'];

people.push('joseph');

console.log(people); //['allan', 'joel', 'mildred', 'joseph']

//unshift(), adds elem at the beginning of an array
people.unshift('sarah');
console.log(people);

//pop(), removes elem at end of array
people.pop();
console.log(people);

//shift(), removes elem at beginning of array
people.shift()
console.log(people);

//indexOf(), finds the index of an elem.
console.log(people.indexOf('joel'));

//Array.isArray(), checks if a value is an array
console.log(Array.isArray(people)); //returns true if array else false.
