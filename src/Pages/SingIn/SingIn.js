import React from 'react';
import { FaUserEdit } from 'react-icons/fa';

const SingIn = () => {

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("click")
	}

	return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* SignIn section  */}
        <div className="mt-5">
          <h1 className="mb-2 flex items-center font-medium">
            <FaUserEdit className="mr-2 text-xl" />
            Signing Location
          </h1>
          <hr className="border bg-gray-600"></hr>
          <div className="form-control w-full mt-4">
            <span className="label-text font-semibold ml-1 mb-1 ">
              Escrow #/ Loan No
            </span>

            <input
              type="text"
              placeholder="Loan No"
              className="input input-bordered input-sm w-full "
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 my-3">
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
        <div className='flex justify-center mt-10'>
          <input
            className="py-2 px-6 rounded-md cursor-pointer text-purple-700 bg-purple-200 font-semibold"
            type="submit"
            value="Shedule Appointment"
          />
        </div>
      </form>
    </div>
  );
};

export default SingIn;