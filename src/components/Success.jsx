import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Success = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h2 className="bg-purple-500 text-white text-4xl text-center p-4 rounded-lg">
        Form Submitted Sucessfully.
      </h2>
      <button className="bg-purple-500 px-4 py-2 rounded-lg text-white text-3xl flex items-center gap-4" onClick={() => window.location.reload()} >
        Return to Home
        <FaExternalLinkAlt />
      </button>
    </div>
  );
};

export default Success;
