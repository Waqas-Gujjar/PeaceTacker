import React from 'react';
import logo from "../assets/images/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 to-white p-4 shadow-md">
        <div className="text-center text-sm md:text-base text-gray-800 font-medium tracking-wide">
          You May Be Entitled to Significant Compensation — <span className="text-blue-600 font-semibold">Find Out If You Qualify in 30 Seconds!</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
