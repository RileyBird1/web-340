/**
 * Author: Riley
 * Date: 11-10-24
 * File Name: weight-converter.js
 * Description: Weight Converter
*/

"use strict";

// TODO: Implement the weight conversion logic here
const readline = require("readline");

function lbsToKg(pounds) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter weight to be converted", function(pounds) {
        if (process.argv.length <= 2) {
            console.error("Usage: node weight-converter.js <pounds>")
            process.exit(1);
        }

        if (isNaN(tablespoons)) {
            console.error("Input must be a number.");
            process.exit(1);
        }
        const kilograms = (pounds * 0.453592).toFixed(2);

        console.log(
            '${pounds} pounds is equivalent to ${kilograms} kilograms.'
        );

        rl.close();
    });
}



