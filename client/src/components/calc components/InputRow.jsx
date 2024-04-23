import { useState, useEffect } from "react";
import getUniqueLocations from "../../utils/getUniqueLocations";
import PropTypes from "prop-types";

function InputRow({
  dob,
  setDob,
  gender,
  setGender,
  location,
  setLocation,
  onCheckProgress,
  onReset,
}) {
  const [availableLocations, setAvailableLocations] = useState([]);
  const [previousLocations, setPreviousLocations] = useState({});
  // Update available locations based on gender
  useEffect(() => {
    // Get unique locations for the selected gender
    if (gender) {
      const uniqueLocations = getUniqueLocations(gender);

      setAvailableLocations(uniqueLocations);

      // If the current location is valid for the new gender, keep it
      if (uniqueLocations.includes(location)) {
        setLocation(location);
      } else {
        // If the current location is not valid, reset to an empty string
        setLocation("");
      }

      // Store previous location choices in a dictionary
      setPreviousLocations((prev) => ({
        ...prev,
        [gender]: location,
      }));
    } else {
      setAvailableLocations([]);
    }
  }, [gender, location, setLocation]);
  const today = new Date().toISOString().split("T")[0];
  const hundredYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 100)
  )
    .toISOString()
    .split("T")[0];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex justify-center space-x-8">
        <span className="font-Poppin">
          {/* Input for Date of Birth */}
          <input
            type="date"
            name="dob"
            className="border px-2 py-1 max-w-52 w-52 text-black bg-white dark:bg-gray-800 dark:text-white input input-ghost text-base shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0_2px_10px_rgba(255,_90,_255,_0.4)]"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            min={hundredYearsAgo}
            max={today}
          />
        </span>
      </div>

      {/* Show gender select if DOB is provided */}
      {dob && (
        <div className="flex justify-center space-x-8">
          <span className="font-Poppin">
            <select
              name="gender"
              className="border px-2 py-1 max-w-52 w-52 text-black bg-white dark:bg-gray-800 dark:text-white select select-ghost text-base shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0_2px_10px_rgba(255,_90,_255,_0.4)]"
              value={gender}
              onChange={(e) => {
                const newGender = e.target.value;
                setGender(newGender);

                // Retain the current location if it matches the new gender's locations
                if (availableLocations.includes(location)) {
                  setLocation(location);
                } else {
                  // Set location to the previously selected one for this gender, if exists
                  const prevLoc = previousLocations[newGender] || "";
                  setLocation(prevLoc);
                }
              }}
            >
              <option value="" hidden>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </span>
        </div>
      )}

      {gender && (
        <div className="flex flex-col justify-center">
          <span className="font-Poppin">
            <select
              name="location"
              className="border px-2 py-1 max-w-52 w-52 text-black bg-white dark:bg-gray-800 dark:text-white select select-ghost text-base shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0_2px_10px_rgba(255,_90,_255,_0.4)]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" hidden>
                Select Location
              </option>
              {availableLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </span>
        </div>
      )}

      <div className="flex gap-4">
        <button
          className="border px-2 py-1 text-white bg-violet-600 font-medium btn btn-ghost hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black w-[8.9em]"
          onClick={onCheckProgress}
        >
          Check Progress
        </button>
        <button
          className="border px-2 py-1 text-white bg-red-600 font-medium btn btn-ghost hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black w-[7.4em]"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

InputRow.propTypes = {
  dob: PropTypes.string,
  setDob: PropTypes.func,
  gender: PropTypes.string,
  setGender: PropTypes.func,
  location: PropTypes.string,
  setLocation: PropTypes.func,
  onCheckProgress: PropTypes.func,
  onReset: PropTypes.func,
};

export default InputRow;
