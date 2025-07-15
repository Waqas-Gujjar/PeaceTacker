import React from "react";
import Bar from "./Bar";
import Form from "./Form/Form.jsx";
import { FaLock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Reviews from "./Reviews.jsx";

const Main = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="w-full max-w-6xl mt-14 mb-6">
        {/* Header Text */}
        <div className="text-center px-4 sm:px-10 py-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            <span className="text-red-600">DON'T Wait</span>
          </h1>
          <p className="text-6xl  text-gray-700 font-bold text-balance">
            If you were recently hurt in a car accident, you could be eligible for a 
            <span className="text-blue-600 font-semibold"> cash settlement </span> 
            to help cover medical bills, lost wages, and pain & suffering.
          </p>
        </div>

        {/* Form Area */}
        <div className="px-10  pb-6">
          <Form />
        </div>

        {/* Privacy Section */}
        <div className="flex items-center justify-center gap-4 py-6">
          <FaLock size={32} className="text-yellow-500" />
          <FaCircleCheck size={32} className="text-green-500" />
          <p className="text-gray-800 text-xl font-semibold tracking-wide">Privacy Protected</p>
        </div>
      </div>

      {/* Bar Component */}
      <div className="w-full bg-[#02193B]">
        <Bar />
      </div>

      {/* Reviews Section */}
      <div className="w-full mt-6">
        <Reviews />
      </div>
    </div>
  );
};

export default Main;
