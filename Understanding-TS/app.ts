// Enums or enumerations are a new data type supported in TypeScript. Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.

// In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.

// There are three types of enums:

// Numeric enum
// String enum
// Heterogeneous enum

enum Position {
  ADMIN,
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array of strings
  role: [number, string]; // a tuple == will enforce the length and the types
  position: Position; // enum
} = {
  name: "John",
  age: 36,
  hobbies: ["Sports", "Cooking"],
  role: [2, "developer"],
  position: Position.AUTHOR,
};

person.role.push("another one"); // this will work and add an extra role. / exception !!
// person.role = ["another" 2] this will not work

console.log(person.position);

// let the var numbers be a number array
let numbers: number[];

numbers = [2];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase()); // cause typescript knows that hobby is a string
}

// TUPLE
