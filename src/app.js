// app.js
const { displayMenu, rl } = require("./menu");
const Calculator = require("./calculator");

const calculator = new Calculator();

function performOperation(option) {
  switch (option) {
    case "1":
      collectNumbersForOperation("Addition", calculator.add);
      break;
    case "2":
      collectNumbersForOperation("Subtraction", calculator.subtract);
      break;
    case "3":
      collectNumbersForOperation("Multiplication", calculator.multiply);
      break;
    case "4":
      collectNumbersForOperation("Division", calculator.divide);
      break;
    case "5":
      exitProgram();
      break;
    default:
      console.log("Invalid option. Please try again.");
      displayMenu();
  }
}

function collectNumbersForOperation(operationName, operation) {
  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      const result = operation(parseFloat(num1), parseFloat(num2));
      console.log(`Result of ${operationName}: ${result}`);
      displayMenu();
    });
  });
}

displayMenu();

rl.question("Select an option: ", (input) => {
  performOperation(input.trim());
});
