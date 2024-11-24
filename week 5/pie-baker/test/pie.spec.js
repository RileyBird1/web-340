/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here

test("All ingredients missing", () => {
    var ingredients = [];
    var pie = "apple";
    const mockLog = jest.spyOn(console, 'log');
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    bakePie(pie, ingredients);
    expect(mockLog).toHaveBeenCalledWith("Essential ingredients are necessary for baking."); 
    expect(mockExit).toHaveBeenCalledWith(1);
   })

test("All ingredients inputted", () => {
    var ingredients = ["flour", "sugar", "butter"];
    var pie = "apple";
    const mockLog = jest.spyOn(console, 'log');
    bakePie(pie, ingredients);
    expect(mockLog).toHaveBeenCalledWith("You have baked an apple pie successfully!"); 

})

test("All ingredients inputted", () => {
    var ingredients = ["flour", "sugar", "butter"];
    var pie = "blueberry";
    const mockLog = jest.spyOn(console, 'log');
    bakePie(pie, ingredients);
    expect(mockLog).toHaveBeenCalledWith("You have baked an blueberry pie successfully!"); 

})

test("An ingredient is missing", () => {
    var ingredients = ["sugar", "butter"];
    var pie = "apple";
    const mockLog = jest.spyOn(console, 'log');
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    bakePie(pie, ingredients);
    expect(mockLog).toHaveBeenCalledWith("Essential ingredients are necessary for baking."); 
    expect(mockExit).toHaveBeenCalledWith(1);
})