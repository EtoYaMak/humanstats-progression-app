import whoMaleData from "../data/whoMaleData.json";
import whoFemaleData from "../data/whoFemaleData.json";

const getUniqueLocations = (gender) => {
  let data;

  if (gender === "Male") {
    data = whoMaleData;
  } else if (gender === "Female") {
    data = whoFemaleData;
  } else {
    return [];
  }

  const locations = data.fact.map((fact) => fact.dims.COUNTRY);

  // Remove duplicates
  const uniqueLocations = [...new Set(locations)];

  return uniqueLocations;
};

export default getUniqueLocations;
