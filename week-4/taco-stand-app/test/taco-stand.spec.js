
"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  try {
    // register an event listener for the ‘action’ event
    tacoStand.on("serveCustomer", (customer) => {
      expect(customer).toEqual("Dave");
    });
    // call the perform action method
    tacoStand.serveCustomer("Dave");
    console.log('Passed testServeCustomer');
    return true;
  } catch(err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    // register an event listener for the ‘action’ event
    tacoStand.on("prepareTaco", (taco) => {
      expect(taco).toEqual("steak");
    });
    // call the perform action method
    tacoStand.prepareTaco("steak");
    console.log('Passed testPrepareTaco');
    return true;
  } catch(err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    // register an event listener for the ‘action’ event
    tacoStand.on("handleRush", (rush) => {
      expect(rush).toEqual("dinner");
    });
    // call the perform action method
    tacoStand.handleRush("dinner");
    console.log('Passed testHandleRush');
    return true;
  } catch(err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

test("testServeCustomer", () => {
  testServeCustomer();
});

test("testPrepareTaco", () => {
  testPrepareTaco();
});

test("testHandleRush", () => {
  testHandleRush();
});