import React from "react";
import Bar from "./Bar";
import Form from "./Form/Form.jsx";
import { FaLock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Reviews from "./Reviews.jsx";

const Main = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mt-10 sm:mt-14 mb-6">
        {/* Header Text */}
        <div className="text-center px-2 sm:px-6 md:px-10 py-8">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1  ">
            <span className="text-blue-600">Don't Wait</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 font-semibold leading-relaxed">
            If you were recently hurt in a car accident, you could be eligible for a 
            <span className="text-blue-600 font-bold"> cash settlement </span> 
            to help cover medical bills, lost wages, and pain & suffering.
          </p>
        </div>

        {/* Form Area */}
        <div className="px-2 sm:px-6 md:px-10 pb-6">
          <Form />
        </div>

        {/* Privacy Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-4">
          <div className="flex items-center gap-2">
            <FaLock size={24} className="text-yellow-500" />
            <FaCircleCheck size={24} className="text-green-500" />
          </div>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium tracking-wide text-center">
            Privacy Protected
          </p>
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
