"use strict";



// For promises:
 const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;
  const characters = [{class:"mage", gender:"male", fact:"turns into turkey"},{class:"warlock", gender:"female", fact:"clucks like chicken"}];
  const characterText = characters.map(character => JSON.stringify(character)).join("\r\n");
  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve(characterText));
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test("writes new character to the file", async() => { 
    await expect(createCharacter(characters)).resolves.toBeUndefined();
  });

  // 2. Test that getCharacters reads characters from the file
  test("reads characters from the file", async() => {
    const charactersResult = await getCharacters();
    expect(charactersResult).toEqual(characters);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("handles errors when writing to the file", async () => {
    fs.writeFile.mockImplementationOnce(() => Promise.reject(new Error("File not found")));
    await expect(createCharacter(characters)).rejects.toThrow("File not found");
  });
});

