"use strict";


// For promises:
const { join } = require('path');
const fs = require('fs').promises;
const CHARACTER_FILE = join(__dirname, "character.txt")
async function createCharacter(character) {
  // TODO: Implement this function
  try {
    const data = JSON.stringify(character)+("\r\n");
    await fs.writeFile(CHARACTER_FILE, data);
  } catch (error) {
    throw error;
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(CHARACTER_FILE, "utf-8");
    const characters = data.split("\r\n").filter(character => character).map(character => JSON.parse(character));
    return characters;
  } catch (error) {
    throw error;
  }
}

module.exports = { createCharacter, getCharacters }; // For promises