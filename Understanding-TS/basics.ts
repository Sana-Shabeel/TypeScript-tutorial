/*
=The main goal is to get the errors during development so we can easily them

=They key difference is: Javascript use "dynamic types" (resolved at runtime), TypeScript use "static types" (set during development)


Type Inference
- Type inference is used to provide type information when there is no explicit type annotation

*/

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(5, 2));
