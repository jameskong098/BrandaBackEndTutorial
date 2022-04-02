const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a vehicle.
 */
let VehicleSchema = new Schema({
  /**
   * The make of this vehicle.
   */
  make: {
    type: String
  },
  /**
   * Your vehicle's model.
   */
  model: {
    type: String
  },
  /**
   * When this Vehicle was designed.
   */
  modelYear: {
    type: Date
  },
  /**
   * Miles Per Gallon or range (for EVs).
   */
  mpg: {
    type: Number
  },
  /**
   * Odometer miles (how many miles the car has been driven).
   */
  odometerMiles: {
    type: Number
  },
  /**
   * Engine type (gas, hybrid, or EV).
   */
  engineType: {
    type: String
  },
  /**
   * The name of this vehicle.
   */
  displayName: {
    type: String
  },
  /**
   * unique alphanumeric identifier)
   */
  vin: {
    type: String
  }
});

let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;