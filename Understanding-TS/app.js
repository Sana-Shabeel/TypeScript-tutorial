// Enums or enumerations are a new data type supported in TypeScript. Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.
// In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
// There are three types of enums:
// Numeric enum
// String enum
// Heterogeneous enum
var Position;
(function (Position) {
    Position[Position["ADMIN"] = 0] = "ADMIN";
    Position[Position["READ_ONLY"] = 100] = "READ_ONLY";
    Position["AUTHOR"] = "AUTHOR";
})(Position || (Position = {}));
var person = {
    name: "John",
    age: 36,
    hobbies: ["Sports", "Cooking"],
    role: [2, "developer"],
    position: Position.AUTHOR
};
person.role.push("another one"); // this will work and add an extra role. / exception !!
// person.role = ["another" 2] this will not work
console.log(person.position);
// let the var numbers be a number array
var numbers;
numbers = [2];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase()); // cause typescript knows that hobby is a string
}
// TUPLE
