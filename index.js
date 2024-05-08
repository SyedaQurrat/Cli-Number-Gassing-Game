#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to number guessing game and won vehicles");
const randomNumber = Math.floor(Math.random() * 9 + 1);
const bikeNames = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "Harley Davidson"];
const carNames = ["Toyota", "Honda", "BMW", "Ford", "Mercedes"];
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 and 9",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("You guessed the wrong number.");
}
if (randomNumber >= 1 && randomNumber <= 5 && answers.userGuessedNumber === randomNumber) {
    console.log(`The selected vehicle is a ${bikeNames[randomNumber - 1]}`);
}
else if (randomNumber >= 6 && randomNumber <= 9 && answers.userGuessedNumber === randomNumber) {
    console.log(`The selected vehicle is a ${carNames[randomNumber - 6]}`);
}
