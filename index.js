const spacecraft = {
 velocity: {
  value: 10000,
  unit: "km/h",
  get metersPerSecond() {
   return this.value / 3.6;
  },
 },
 acceleration: {
  value: 3,
  unit: "m/s^2",
 },
 duration: {
  value: 3600,
  unit: "s",
 },
 initialDistance: {
  value: 0,
  unit: "km",
  get meters() {
   return this.value * 1000;
  },
 },
 fuelAmount: {
  value: 5000,
  unit: "kg",
 },
 fuelBurnRate: {
  value: 0.5,
  unit: "kg/s",
 },
 calcNewVelocity: function (acceleration, velocity, duration) {
  if (
   typeof acceleration !== "number" ||
   typeof velocity !== "number" ||
   typeof duration !== "number"
  ) {
   throw new Error("Invalid input parameters for calcNewVelocity function");
  }
  return velocity + acceleration * duration;
 },
};

if (
 spacecraft.velocity.unit !== "km/h" ||
 spacecraft.acceleration.unit !== "m/s^2" ||
 spacecraft.duration.unit !== "s" ||
 spacecraft.initialDistance.unit !== "km" ||
 spacecraft.fuelAmount.unit !== "kg" ||
 spacecraft.fuelBurnRate.unit !== "kg/s"
) {
 throw new Error(
  "Invalid unit of measurement for one or more input parameters"
 );
}

const newDistanceInMeters =
 spacecraft.initialDistance.meters +
 spacecraft.velocity.metersPerSecond * spacecraft.duration.value;
const newDistanceInKilometers = newDistanceInMeters / 1000;

const remainingFuelInKilograms =
 spacecraft.fuelAmount.value -
 spacecraft.fuelBurnRate.value * spacecraft.duration.value;

const newVelocityInMetersPerSecond = spacecraft.calcNewVelocity(
 spacecraft.acceleration.value,
 spacecraft.velocity.metersPerSecond,
 spacecraft.duration.value
);
const newVelocityInKilometersPerHour = newVelocityInMetersPerSecond * 3.6;

console.log(`Corrected New Velocity: ${newVelocityInKilometersPerHour} km/h`);
console.log(`Corrected New Distance: ${newDistanceInKilometers} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelInKilograms} kg`);
