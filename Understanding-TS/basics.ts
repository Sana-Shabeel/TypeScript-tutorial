/*
=The main goal is to get the errors during development so we can easily them

=They key difference is: Javascript use "dynamic types" (resolved at runtime), TypeScript use "static types" (set during development)


Type Inference
- Type inference is used to provide type information when there is no explicit type annotation

*/

// CORE TYPES

// String

const myName: string = "Anas";
const isMale: boolean = true;
const age: number = 20;

function add(name: string, age: number, isMale: boolean) {
  if (isMale) {
    return `${name} is a male at the age of ${age}. He will soon be ${age + 1}`;
  }
  return `${name} is not a male`;
}

console.log(add(myName, age, isMale));
