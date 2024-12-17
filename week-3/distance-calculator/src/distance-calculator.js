"use strict";

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  const planets = {Mercury: 0.39, Venus: 0.72, Earth: 1.00, Mars: 1.52, Jupiter: 5.20, Saturn: 9.54, Uranus: 19.20, Neptune: 30.06, Pluto: 39.50};
  if(planet1 in planets && planet2 in planets) {
    const distance = planets[planet2] - planets[planet1];
    return(distance);
  } else {
    throw new Error("Not a valid planet.");
  };
};

module.exports = calculateDistance;