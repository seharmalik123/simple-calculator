#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wellcome message
console.log("\n\twellcome to my code. Cli-Simple Calculator\n");

//Asking questions from user through inquirer
let answers = await inquirer.prompt([
    {
        message: "Enter first Number", type: "number", name: "firstNumber"
    },
    {
        message: "Enter second Number", type: "number", name: "secondNumber"
    },
    {
        message: "select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statements if - else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
