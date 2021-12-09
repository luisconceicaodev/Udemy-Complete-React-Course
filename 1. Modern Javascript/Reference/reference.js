const person = {
  name: "Max",
};

const secondPerson = person; // directly links to it

person.name = "Manu";

console.log(secondPerson); // Manu

const secondPerson2 = {
  ...person, // creates a new copy
};

person.name = "Manu";

console.log(secondPerson2); // Max
