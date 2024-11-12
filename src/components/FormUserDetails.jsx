import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const FormUserDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const { occupation, city, bio } = values;
  return (
    <div className="max-w-[670px] mx-auto my-6 ">
      <h2 className="bg-purple-500 text-white text-4xl text-center p-4 rounded-lg">
        Enter User Details
      </h2>

      <div className="flex flex-col gap-4 p-6">
        <input
          className="border-2 rounded-lg p-4 bg-[#202124] text-white"
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={handleChange("occupation")}
        />

        <input
          className="border-2 rounded-lg p-4 bg-[#202124] text-white"
          type="text"
          placeholder="City"
          value={city}
          onChange={handleChange("city")}
        />

        <textarea
          className="border-2 rounded-lg p-4 bg-[#202124] text-white"
          placeholder="Bio"
          value={bio}
          onChange={handleChange("bio")}
        />

        <div  className="flex justify-between mx-6 ">
          <button
            className="bg-purple-500 px-4 py-2 rounded-lg text-white lg:text-3xl  flex items-center gap-2"
            onClick={prevStep}
          >
            <FaLongArrowAltLeft />
            Back
          </button>
          <button
            className="bg-purple-500 px-4 py-2 rounded-lg text-white lg:text-3xl flex items-center gap-2"
            onClick={nextStep}
          >
            Next <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormUserDetails;
