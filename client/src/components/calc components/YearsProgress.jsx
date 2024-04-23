// Import the calculateAgeAndLifeExpectancy function
import calculateAgeAndLifeExpectancy from "../../utils/calculateAgeAndLifeExpectancy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
// Importing prop-types for validation
import PropTypes from "prop-types";
// Component to display squares representing each year from birth to life expectancy
function YearsProgress({ dob, gender, location }) {
  // Get both age and life expectancy from the combined function
  const { age, lifeExpectancy } = calculateAgeAndLifeExpectancy(
    dob,
    gender,
    location
  );

  // Check for valid life expectancy
  if (typeof lifeExpectancy !== "number" || lifeExpectancy === null) {
    return <div>Invalid location or gender</div>;
  }

  const totalYears = Math.round(lifeExpectancy);
  const totalPercentage = (age / totalYears) * 100;

  // Create squares representing each year from birth to life expectancy
  const squares = Array.from({ length: totalYears }, (_, i) => {
    const isLived = i < age; // Represents years already lived
    const isCurrent = i === age - 1; // Adjusted for off-by-one

    return (
      <div
        key={i}
        className={`w-8 h-8 m-1 rounded-lg ${
          isLived
            ? "bg-green-500 text-white font-bold"
            : "bg-gray-400 dark:bg-gray-700 text-white font-normal"
        } ${isCurrent ? "bg-purple-500 animate-pulse1" : ""}`} // Adjusted conditional for current age
      >
        <p
          className={`font-Poppin flex items-center justify-center h-full w-full select-none relative`}
        >
          {i + 1} {/* Display year number */}{" "}
          {isCurrent && (
            <FontAwesomeIcon
              icon={faHandPointLeft}
              className="absolute -right-6 animate-bounce top-3 dark:text-white text-gray-800 text-xl"
            />
          )}
        </p>
      </div>
    );
  });

  return (
    <div className="flex flex-col py-8 gap-8">
      <div className="text-xl text-center text-zinc-700 dark:text-gray-100 font-Poppin max-w-[34em] mx-auto">
        You&apos;ve journeyed through{" "}
        <span className="text-green-700 dark:text-green-500 ">{age}</span> years
        of an epic{" "}
        <span className="dark:text-purple-500 text-purple-900">
          {totalYears}
        </span>{" "}
        adventure! 🌟
        <br />
        <span className="text-lg ">
          That&apos;s a solid{" "}
          <span className="underline underline-offset-2 font-medium text-black dark:text-white">
            {totalPercentage.toFixed(2)}%
          </span>{" "}
          of your expected lifespan.
        </span>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1">
        {squares}
      </div>

      <div className="text-center text-black dark:text-white text-sm sm:text-lg font-Poppin flex flex-col">
        <p>
          In <span className="underline underline-offset-2">{location}</span>, a{" "}
          <span className="underline underline-offset-2">{gender}</span> is
          expected to live until the age of{" "}
          <span className="underline underline-offset-2">{totalYears}</span>.
        </p>
        <span className="p-2">
          This estimate is based on 2019 data from the{" "}
          <a
            href="https://apps.who.int/gho/data/view.main.SDG2016LEXv?lang=en"
            target="_blank"
            className="p-1 underline underline-offset-2 border-black"
          >
            World Health Organization{" "}
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="text-sm no-underline ml-2"
            />
          </a>
          , reflecting life expectancy trends.
        </span>
      </div>
    </div>
  );
}

YearsProgress.propTypes = {
  dob: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default YearsProgress;
