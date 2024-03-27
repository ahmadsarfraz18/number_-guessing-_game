#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomnumber = Math.floor(Math.random() * 10) + 1; //randomly guesses a number between 1 to 10
const answer = await inquirer.prompt({
    name: "number",
    type: "number",
    message: chalk.yellow("\nPLEASE ENTER A NUMBER BETWEEN 1 TO 6"), //types message in yellow color
    prefix: ""
});
if (randomnumber == answer.number) //compares the randomly guessed number by computer with the entered number by user
 {
    console.log(chalk.green("\nYOU GUESSED THE RIGHT NUMBER")); //prints in green color
}
else
    console.log(chalk.red("\nYOU GUESSED THE WRONG NUMBER")); //prints in red color
