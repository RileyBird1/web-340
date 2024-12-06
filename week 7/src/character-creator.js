const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.messages=[];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    try {
      const character = JSON.parse(chunk);
      console.log(character);
      if (!character) {
        callback(new Error("Invalid data"));
        return;
      }
      this.messages.push(`The character class is ${character.class}. The character gender is ${character.gender}. The character fact is ${character.fact}.`);
      callback();
    } catch (error) {
      console.error(error);
      callback(new Error("Invalid data"));
    }
  }

  _read(size) {
    // TODO: Implement your _read method here
    if (this.messages.length) {
      this.push(this.messages.shift()+"\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;