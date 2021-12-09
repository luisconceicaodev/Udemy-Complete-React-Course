Classes
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.

Like this:

class Person {
constructor () {
this.name = 'Max';
}
}

const person = new Person();
console.log(person.name); // prints 'Max'
In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

class Person {
name = 'Max';
}

const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

class Person {
name = 'Max';
printMyName () {
console.log(this.name); // this is required to refer to the class!
}
}

const person = new Person();
person.printMyName();
Or like this:

class Person {
name = 'Max';
printMyName = () => {
console.log(this.name);
}
}

const person = new Person();
person.printMyName();
The second approach has the same advantage as all arrow functions have: The this keyword doesn't change its reference.

You can also use inheritance when using classes:

class Human {
species = 'human';
}

class Person extends Human {
name = 'Max';
printMyName = () => {
console.log(this.name);
}
}

const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
