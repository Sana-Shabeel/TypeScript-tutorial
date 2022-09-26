/*
UNION TYPES 


Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. For instance, take the following function:
* Takes a string and adds "padding" to the left.
* If 'padding' is a string, then 'padding' is appended to the left side.
* If 'padding' is a number, then that number of spaces is added to the left side.
 
*/

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello world", 5));

function combine(ip1: string | number, ip2: string | number) {
  // Operator '+' cannot be applied to types 'string | number' and 'string | number'.ts(2365)
  // return ip + ip2;
  if (typeof ip1 === "number" && typeof ip2 === "number") {
    return ip1 + ip2;
  }
  return ip1.toString() + ip2.toString();
}
console.log(combine("an", "as"));
console.log(combine(2, 3));
