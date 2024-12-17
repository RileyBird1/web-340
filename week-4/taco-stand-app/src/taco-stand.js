"use strict"

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
    this.taco = [];
    this.customer = [];
   }

  serveCustomer(customer) {
    this.customer.push(customer);
    this.emit("serveCustomer", customer);
  }
  
  prepareTaco(taco) {
    this.taco.push(taco);
    this.emit("prepareTaco", taco);
  }
  handleRush (rush) {
    this.emit("handleRush", rush)
  }
}

const tacoStand = new TacoStandEmitter(); 


module.exports = TacoStandEmitter;

