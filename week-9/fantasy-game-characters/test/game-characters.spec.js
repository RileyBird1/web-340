// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class:"mage", gender:"male", fact:"turns into turkey" },
        { class:"warlock", gender:"female", fact:"clucks like chicken" },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
    });
    done();
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});
