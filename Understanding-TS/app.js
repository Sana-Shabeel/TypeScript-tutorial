// const person: {
//   name: string;
//   age: number;
// } =
var person = {
    name: "John",
    age: 36,
    hobbies: ["Sports", "Cooking"]
};
// let the var numbers be a number array
var numbers;
numbers = [2];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
