/**
 * Author: Riley
 * Date: 11-10-24
 * File Name: index.js
 * Description: index file
*/

// TODO: Import your module using require
const { createRecipe, setTimer,quit } = require('./recipes.js');

// TODO: Implement your CLI program here
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

createRecipe();
setTimer();
quit();
rl.close();