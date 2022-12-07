//variables
var a; //var keyword lets us declare a variable and access it anywhere in the code.
let b; //let keyword lets us declare a variable and use it only in the scope it was declared.
const x = 10; // declared a variable which is unchangeable throughout the code and it has to be initialized.

a = 3;
b = 7;
console.log(a + b);

a = 6; //assigning a with a different value
b = 5; //assigning b with a different value
console.log(a + b);

x = 3 //assigning a constant with another value.
console.log(x); //will raise an error.


//function
function add(a, b) {
    return a + b
}

x = 10;
y = 5;

let result = add(x, y);
console.log(result);

//array
let arr = [] //declaring an empty array
arr = [1, 2, 3, 4, 5] //assigning elements to array

console.log(arr.length); //access number of elem in the array using length property

//iterating through array using for loop
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//iterating thru array using for ... of loop in ES6
for(let i of arr) {
    console.log(i);
}

//class
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//declaring a method of the class
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// we use 'new' keyword to create an instance of the class Person.
let john = new Person('John', 'Doe');

//using the (.) operator to call the method of the class.
let fullName = john.getFullName();
console.log(fullName);

//in ES6 we can use the class keyword to create a class in JavaScript
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}

//if statement
a = 30;
b = 20;

if (a < b) {
    console.log("b is greater");
} else {
    console.log("a is greater");
}

//javascript reserved keywords
/*await
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
export
extends
false
finally
for
function
if
implements
import
in
instanceof
interface
let
new
null
package
private
protected
public
return
super
switch
static
this
throw
try
True
typeof
var
void
while
with
yield
*/