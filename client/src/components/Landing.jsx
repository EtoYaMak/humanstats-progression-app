import React from "react";
import InputRow from "./calc components/InputRow";
import YearsProgress from "./calc components/YearsProgress";

function Landing() {
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [location, setLocation] = React.useState(" ");
  const [showProgress, setShowProgress] = React.useState(false); // State to control visibility of results

  const handleCheckProgress = () => {
    if (!dob || !gender || !location) {
      return;
    }
    setShowProgress(true);
  };

  const handleReset = () => {
    setDob("");
    setGender("");
    setLocation(" ");
    setShowProgress(false);
  };

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <h1 className="font-Poppin text-4xl text-center antialiased uppercase p-2 text-zinc-500 dark:text-white">
        Life Progress Checker
      </h1>
      <InputRow
        dob={dob}
        setDob={setDob}
        gender={gender}
        setGender={setGender}
        location={location}
        setLocation={setLocation}
        onCheckProgress={handleCheckProgress}
        onReset={handleReset}
      />

      {showProgress && (
        <YearsProgress dob={dob} gender={gender} location={location} />
      )}
    </div>
  );
}

export default Landing;
