import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ServiceCart from './ServiceCart';
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {

	const { data: services ,isLoading} = useQuery({
		queryKey: ["services"],
		queryFn: async () => {
			const res = await fetch("service.json")
			const data = await res.json()
			return data
		}
	})

	if (isLoading) {
		return <h1>Loadding</h1>
	}

	return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="grid gap-4">
          {services.map((service) => (
            <ServiceCart key={service.id} service={service}></ServiceCart>
          ))}
        </div>
        <div className="border-2 p-5 rounded-lg">
          <h3 className="text-xl text-center font-bold mb-4">
            Calculate your Costs for RON!
          </h3>
          <form>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">No of Extra Singnatures</h3>
                <p className="text-xs">
                  please enter zero, if only one signature is required
                </p>
              </div>
              <input
                className="border-2 w-14 h-8 ml-3 rounded-sm px-1 text-sm"
                type="text"
              />
            </div>

            <div className="flex items-center justify-between mt-4 ">
              <div>
                <h3 className="font-medium">
                  How Many Files will you be uploading in the sessioin
                </h3>
              </div>
              <input
                className="border-2 w-28 h-8 ml-3 rounded-sm px-1 text-sm"
                type="text"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="font-medium">Number of Signers</h3>
              </div>
              <input
                className="border-2 w-28 h-8 ml-3 rounded-sm px-1 text-sm"
                type="text"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="font-medium">Do you Need Witness?</h3>
                <p className="text-xs">
                  Do Not enter anything if you're bring your own Witness
                </p>
              </div>

              <input
                className="border-2 w-14 h-8 ml-3 rounded-sm px-1 text-sm"
                type="text"
              />
            </div>
          </form>
          <h3 className="text-xl text-center font-bold mt-4">
            Your Apporoximate Auote: $56
          </h3>
        </div>
      </div>

      <h3 className="flex items-center justify-end mt-4  text-purple-800 font-bold">
        <Link to="/details">
          <span className="flex items-center cursor-pointer">
            Next Step <FaArrowRight className="ml-2" />
          </span>
        </Link>
      </h3>
    </div>
  );
};

export default Home;