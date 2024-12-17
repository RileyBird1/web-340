
"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

tacoStand.on("serveCustomer", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepareTaco", (taco) => {
  console.log(`Taco Stand prepares: ${taco}`);
});

tacoStand.on("handleRush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

tacoStand.on('error', (err) => {
  console.error('An error occurred:', err);
});


// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  if(command == "serve") {
    tacoStand.serveCustomer(args);
  }
  if(command == "prepare") {
    tacoStand.prepareTaco(args);
  }
  if(command == "rush") {
    tacoStand.handleRush(args);
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);