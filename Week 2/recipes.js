/**
 * Author: Riley
 * Date: 11-10-24 
 * File Name: recipes.js
 * Description:  Recipe function
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  const ingredients = [
    {name: "ingredient1"},
    {name: "ingredient2"},
  ]

  console.log("Recipe created with ingredients: " + ingredient1 + ", " + ingredient2);
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return 'Timer set for ${minutes} minutes';
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  process.exit(0);
  return 'Program exited';
}

// TODO: Export the functions
  module.exports = {
    createRecipe,
    setTimer,
    quit
  };