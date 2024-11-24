/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const hasSugar = ingredients.includes("sugar");
  const hasFlour = ingredients.includes("flour");
  const hasButter = ingredients.includes("butter");

  if (hasSugar && hasFlour && hasButter) {
    console.log("You have baked an " + pieType + " pie successfully!")

  } else {
    console.log("Essential ingredients are necessary for baking.");
    process.exit(1);
  }
}

module.exports = { bakePie };