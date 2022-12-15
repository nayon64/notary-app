import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div className="drawer drawer-mobile rounded-2xl">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="menu p-4 w-80 bg-purple-800 text-white">
          <div className="flex items-center ">
            <span className="p-2 bg-yellow-300 rounded-full">
              <BsFillLightningFill className="text-purple-800" />
            </span>
            <h3 className="font-bold text-xl ml-2 text-yellow-300">
              Belnsurance
            </h3>
          </div>
          <img
            className="w-20 rounded-full mx-auto my-4"
            src="http://preview.byaviators.com/template/superlist/assets/img/tmp/agent-2.jpg"
            alt=""
          />
          <h2 className="text-2xl font-bold text-white text-center">
            Jacob Jones
          </h2>

          {/* contact section  */}
          <div className="mt-3">
            <p className="flex items-center mt-3">
              <AiOutlineMail className="mr-3 text-2xl"></AiOutlineMail>
              Jackson.jn@mail.com
            </p>
            <p className="flex items-center mt-3">
              <FaPhoneAlt className="mr-4 text-xl"></FaPhoneAlt>
              (316)555-0116
            </p>
            <p className="flex items-center mt-3">
              <FaMapMarkerAlt className="mr-3 text-2xl"></FaMapMarkerAlt>
              3891 Ronchview Dr.Richardson, California 62639
            </p>
            <p className="flex items-center mt-3">
              <FaUserAlt className="mr-3 text-2xl"></FaUserAlt>
              Insurance ID 24792492
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
