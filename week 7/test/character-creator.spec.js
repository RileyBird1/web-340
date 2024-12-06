const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const characters = [{class:"mage", gender:"male", fact:"turns into turkey"},{class:"warlock", gender:"female", fact:"clucks like chicken"}];
       characters.forEach(character => characterCreator.write(JSON.stringify(character)));
       characterCreator.on('data', (data) => {
        const character = characters.shift();
        expect(data.toString().trim()).toBe(`The character class is ${character.class}. The character gender is ${character.gender}. The character fact is ${character.fact}.`);
        if (characters.length === 0) done();
       });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
      });
      characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const character = JSON.stringify({class:"mage", gender:"male", fact:"turns into turkey"},{class:"warlock", gender:"female", fact:"clucks like chicken"});
    const expectedOutput = `The character class is ${JSON.parse(character).class}. The character gender is ${JSON.parse(character).gender}. The character fact is ${JSON.parse(character).fact}.`;
    characterCreator.write(character, 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});