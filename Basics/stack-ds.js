/*
JS Array type provides the push() and pop() mtds
that allow use of an array as a stack.
*/

let stack = [];

stack.push(1, 2, 3, 4, 5);
console.log(stack);

//remove elem of stack with pop()
stack.pop()

//reverse a string using stack
myStr = "i love javascript";
let myStack = [];

for (let j = 0; j < myStr.length; j++) {
    myStack.push(myStr[j]);
}
console.log(myStack);

let reversed = '';

while(myStack.length > 0) {
    reversed += myStack.pop();
}
console.log(reversed);

console.log(myStack.push(myStr));

//function to reverse string using stack
function reverse(str) {
    let stack = [];
    //push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    //pop letter from stack
    let reverseStr = '';

    while(stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}

console.log(reverse("My name is Nandweza Allan"));