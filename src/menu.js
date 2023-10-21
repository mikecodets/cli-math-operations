// menu.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("Select an option:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");
}

function exitProgram() {
  console.log("Exiting the program.");
  rl.close();
}

module.exports = {
  displayMenu,
  exitProgram,
  rl,
};
