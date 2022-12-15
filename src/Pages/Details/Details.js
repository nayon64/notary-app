import React from "react";
import { FaUserEdit } from "react-icons/fa";

const Details = () => {
  return (
    <div>
      {/* Personal details section  */}
      <div className="mt-5">
        <h1 className="mb-2 flex items-center">
          <FaUserEdit className="mr-2 text-xl" />
          Personal Details
        </h1>
        <hr className=" bg-gray-600"></hr>
        <div className="grid sm:grid-cols-2 gap-4 my-3">
          <div className="form-control w-full ">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Full Name
            </span>

            <input
              type="text"
              placeholder="Jone Doe"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control w-full">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Phone Number
            </span>
            <input
              type="number"
              placeholder="+880121212121"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control w-full">
            <span className="label-text font-semibold ml-1 mb-1 ">Email</span>
            <input
              type="email"
              placeholder="user@mail.com"
              className="input input-bordered input-sm w-full "
            />
          </div>
        </div>
      </div>

      {/* title conpany details section  */}
      <div className="mt-6">
        <h1 className="mb-3 flex items-center">
          <FaUserEdit className="mr-2 text-xl" />
          Title Company Details
        </h1>
        <hr className=" bg-gray-600"></hr>
        <div className="grid sm:grid-cols-2 gap-4 my-3">
          <div className="form-control w-full ">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Company Name
            </span>

            <input
              type="text"
              placeholder="Jone Doe"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control w-full ">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Agent Name
            </span>

            <input
              type="text"
              placeholder="Jone Doe"
              className="input input-bordered input-sm w-full "
            />
          </div>

          <div className="form-control w-full">
            <span className="label-text font-semibold ml-1 mb-1 ">Email</span>
            <input
              type="email"
              placeholder="user@mail.com"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control w-full">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Phone Number
            </span>
            <input
              type="number"
              placeholder="+880121212121"
              className="input input-bordered input-sm w-full "
            />
          </div>
        </div>
		  </div>
		  
      {/* Order details section  */}
      <div className="mt-5">
        <h1 className="mb-3 flex items-center">
          <FaUserEdit className="mr-2 text-xl" />
          Order Details
        </h1>
        <hr className=" bg-gray-600"></hr>
        <div className="grid sm:grid-cols-2 gap-4 my-3">
          <div className="form-control w-full ">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Escrow #/ Loan No
            </span>

            <input
              type="text"
              placeholder="Loan No"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="form-control w-full">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Property Address
            </span>
            <input
              type="text"
              placeholder="Write your property address"
              className="input input-bordered input-sm w-full "
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
