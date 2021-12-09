// ES6

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // executes parent constructor
    this.name = "Max";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// ES6
constructor() {
  this.myProperty = 'value'
}
// ES7
myProperty = 'value'
//ES6
myMethod() {
  
}
//ES7
myMethod = () => {}