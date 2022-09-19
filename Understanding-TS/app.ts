// const person: {
//   name: string;
//   age: number;
// } =
const person = {
  name: "John",
  age: 36,
  hobbies: ["Sports", "Cooking"],
};

// let the var numbers be a number array
let numbers: number[];

numbers = [2];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase()); // cause typescript knows that hobby is a string
}
