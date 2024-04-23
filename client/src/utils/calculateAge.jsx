// Import necessary modules and data
import whoMaleData from "../data/whoMaleData.json";
import whoFemaleData from "../data/whoFemaleData.json";

// Function to calculate age based on date of birth
function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }

  return age;
}

// Function to calculate life expectancy based on location and gender
function getLifeExpectancy(gender, location) {
  // Determine which data file to use based on gender
  const data = gender === "Male" ? whoMaleData : whoFemaleData;

  // Find the record for the given location and gender
  const record = data.fact.find(
    (item) => item.dims.COUNTRY === location && item.dims.SEX === gender
  );

  if (record) {
    return parseFloat(record.Value);
  }

  // Return null if no record is found for the specified location and gender
  return null;
}

// Combined function to calculate age and life expectancy
function calculateAgeAndLifeExpectancy(dateOfBirth, gender, location) {
  const age = calculateAge(dateOfBirth); // Calculate the age
  const lifeExpectancy = getLifeExpectancy(gender, location); // Fetch life expectancy from JSON

  return { age, lifeExpectancy };
}

export default calculateAgeAndLifeExpectancy;
