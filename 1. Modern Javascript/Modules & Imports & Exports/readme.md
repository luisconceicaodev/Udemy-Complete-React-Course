Exports & Imports
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export (to make it available) and import (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

default => export default ...;

named => export const someData = ...;

You can import default exports like this:

import someNameOfYourChoice from './path/to/file.js';

Surprisingly, someNameOfYourChoice is totally up to you.

Named exports have to be imported by their name:

import { someData } from './path/to/file.js';

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

import \* as upToYou from './path/to/file.js';

upToYou is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ... (/path/to/file.js ) you can access it on upToYou like this: upToYou.someData .

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
