/*
UNION TYPES


Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. For instance, take the following function:
* Takes a string and adds "padding" to the left.
* If 'padding' is a string, then 'padding' is appended to the left side.
* If 'padding' is a number, then that number of spaces is added to the left side.
 
*/
function padLeft(value, padding) {
    return value + "-".repeat(padding);
}
console.log(padLeft("Hello world", 4));
