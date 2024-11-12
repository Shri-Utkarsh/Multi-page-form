import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


const FormPersonalDetails = ({ nextStep, handleChange, values }) => {
  const { firstName, lastName, email } = values;
  return (
    <div className="max-w-[670px] mx-auto my-6 ">
      <h2 className="bg-purple-500 text-white text-3xl text-center p-4 rounded-lg">
        Enter Personal Details
      </h2>

      <div className="flex flex-col gap-4 p-6">
        <input
          className="border-2 rounded-lg p-4 bg-[#202124] text-white"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange("firstName")}
          required
        />

        <input
          className="border-2 rounded-lg p-4 bg-[#202124] text-white"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange("lastName")}
        />

        <input
          className="border-2 rounded-lg p-4 bg-[#202124] text-white"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleChange("email")}
        />

        <div className="flex justify-end" > 
             <button className="bg-purple-500 px-4 py-2 rounded-lg text-white lg:text-3xl flex items-center gap-2" onClick={nextStep} >Next <FaLongArrowAltRight /> </button>
        </div>

      </div>
        
    </div>
  );
};

export default FormPersonalDetails;
