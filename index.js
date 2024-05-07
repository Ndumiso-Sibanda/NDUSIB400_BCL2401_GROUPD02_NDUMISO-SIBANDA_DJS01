/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
// Renamed the variables to make it more descriptive
const velocity = { value: 10000, unit: "km/h" }; // velocity (km/h)
const acceleration = { value: 3, unit: "m/s^2" }; // acceleration (m/s^2)
const duration = { value: 3600, unit: "s" }; // seconds (1 hour)
const initialDistance = { value: 0, unit: "km" }; // distance (km)
const fuelAmount = { value: 5000, unit: "kg" }; // remaining fuel (kg)
const fuelBurnRate = { value: 0.5, unit: "kg/s" }; // fuel burn rate (kg/s)

// Calculate new distance
const newDistanceInMeters =
 initialDistanceInMeters + velocityInMetersPerSecond * duration.value;
const newDistanceInKilometers = newDistanceInMeters / 1000;

const rf = fbr * time; //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => {
 return vel + acc * time;
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
