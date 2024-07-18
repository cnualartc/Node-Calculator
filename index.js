let rs = require('readline-sync');

// 1. Ask the user, "What operation would you like to perform?"
// 2. Then the user enters one of these options: "/" "*" "-" "+"
// 3. If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// 4. After the user enters a valid operation, ask the user, "Please enter the first number"
// 5. The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// 6. After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// 7. Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
// For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"

let operation = '';
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let remainder = 0;

function getOperation() {
  operation = rs.question(`What operation would you like to perform? (+, -, *, or /) `);
  while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    console.log(operation);
    console.log('That is not a valid operation');
    operation = rs.question(`What operation would you like to perform? (+, -, *, or /) `);
  }
}

function getNumbers() {
  firstNumber = parseInt(rs.question('Please enter the first number: '));
  while (isNaN(firstNumber) || firstNumber === '') {
    console.log('This is not a number')
    firstNumber = parseInt(rs.question('Please enter the first number: '));
  }
  secondNumber = parseInt(rs.question('Please enter the second number: '));
  while (isNaN(secondNumber) || secondNumber === '') {
    console.log('This is not a number')
    secondNumber = parseInt(rs.question('Please enter the first number: '));
  }
}

function calculateResult(operation, firstNumber, secondNumber) {
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
  } 
}

function calculator() {
  getOperation();
  getNumbers();
  calculateResult(operation, firstNumber, secondNumber);
  if (operation === '/') {
    console.log('The result is: ' + result);
  } else {
    console.log('The result is: ' + result);
  }
}

calculator();