import React from 'react';
import {FaArrowRight, FaStar} from "react-icons/fa";

const ServiceCart = ({ service }) => {
	return (
    <div className="w-full border-2 rounded-lg p-3 flex justify-between gap-2">
      <div className='flex flex-col justify-between'>
        <div>
          <h2 className="text-xl font-semibold">{service?.title}</h2>
          <p className="text-xs">{service?.about}</p>
				</div>
				<p className='flex items-center font-semibold text-purple-800 text-sm cursor-pointer'>View Details <FaArrowRight className='ml-2'/></p>
      </div>
      <div className="my-auto flex flex-col items-end">
        {service?.category === "Popular" && (
          <span className="flex items-center text-purple-800 mb-2">
            <FaStar className="mr-1" />
            {service?.category}
          </span>
        )}
        <input className="w-16 border-2" type="text" />
        <p className="text-xs text-end">Per Year</p>
      </div>
    </div>
  );
};

export default ServiceCart;