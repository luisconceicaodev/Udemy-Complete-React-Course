Destructuring
Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
And here for an object:

const myObj = {
name: 'Max',
age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

const printName = (personObj) => {
console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

const printName = ({name}) => {
console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
We get the same result as above but we save some code. By destructuring, we simply pull out the name property and store it in a variable/ argument named name which we then can use in the function body.
