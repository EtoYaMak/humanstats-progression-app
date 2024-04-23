import whoMaleData from "../data/whoMaleData.json";
import whoFemaleData from "../data/whoFemaleData.json";

function calculateAgeAndLifeExpectancy(dob, gender, location) {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }

  // Select the correct data file based on the gender
  const data = gender === "Male" ? whoMaleData : whoFemaleData;

  // Find the life expectancy for the given country and gender
  const lifeExpectancyRecord = data.fact.find(
    (record) => record.dims.COUNTRY === location && record.dims.SEX === gender
  );

  // Assuming life expectancy doesn't change frequently, we ignore the YEAR in the dims.
  const lifeExpectancy = lifeExpectancyRecord
    ? parseFloat(lifeExpectancyRecord.Value)
    : null;

  return { age, lifeExpectancy };
}

export default calculateAgeAndLifeExpectancy;

/* // Function to calculate age based on date of birth
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
} */
