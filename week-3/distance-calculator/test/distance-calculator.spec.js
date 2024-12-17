const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.52);
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToPluto() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance('Venus', 'Pluto'), 38.78);
    return true;
  } catch (error) {
    console.error(`Failed testVenusToPluto: ${error.message}`);
    return false;
  }
}

function planetNotFound() {
  // TODO: Implement this function
  try {
    calculateDistance('Pluto', 'Mickey');
    return true;
  } catch (error) {
    expect(error.message).toEqual("Not a valid planet.");
    console.error(`Failed planetNotFound: ${error.message}`);
    return false;
  }
}



// Call your test functions here
test("testEarthToMars", () => {
  testEarthToMars();
});

test("testVenusToPluto", () => {
  testVenusToPluto();
});

test("planetNotFound", () => {
  planetNotFound();
});