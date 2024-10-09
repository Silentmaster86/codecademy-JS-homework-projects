// Function declaration
/* function keyword */ function /* identifie r*/ greetWorld() /* function body */ {
  console.log("Hello, World!");
} /* function body */

function calculateArea(width, height) {
  console.log(width * height);
}

/*(width, height) - parameters
(width * height) - parameters are treated like variables within a function
*/

/* To call a function in code */

greetWorld(); /* Identifier */

//ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

//To return a value from a function, we use a return statement.

//To define a function using function expressions:

const calculateArea = function (width, height) {
  const area = width * height;
  return area;
};

// calculateArea - Identifier
// function keyword - function
// (width, height) - parameters

// To define a function using arrow function notation:

const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

// calculateArea - Identifier
// (width, height) - parameters
// => - arrow

// Function definition can be made concise using concise arrow notation:
// single-line block
const sumNumbers1 = (number) => number + number;
// multi-line block
const sumNumbers = (number) => {
  const sum = number + number;
  return sum; // return statement
};
