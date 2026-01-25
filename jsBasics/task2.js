import chalk from 'chalk';

let player1 = "Joe";
let player2 = "Paul";

const greeting = 'Hello ' + player1 + ' and ' + player2 + ', your game is starting right now';
console.log(chalk.blue.underline.bold(greeting));

const teamplateGreeting = `Hello ${player1} and ${player2}, your game is starting right now`;
console.log(chalk.green.underline.bold(teamplateGreeting));
