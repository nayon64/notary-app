import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const BackSpace = () => {
	return (
    <div className="flex items-center">
      <div className="mr-3 rounded-full p-2 bg-purple-100 text-purple-800 cursor-pointer">
        <FaArrowLeft />
      </div>
      <div>
        <h2 className="text-2xl">New Appintment Request.</h2>
        <p className="text-xs">Some great coeverage for less</p>
      </div>
    </div>
  );
};

export default BackSpace;