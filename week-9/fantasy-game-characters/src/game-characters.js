// game-characters.js
const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(fileName = dataFile) {
    // TODO: Set the script file path
    this.script = fileName;
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.script]);

    child.stdout.on("data", (data) => {
      const gameData = JSON.parse(data.toString());
      callback(gameData, null);
    });

    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };