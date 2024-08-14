import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#F2F1F1] w-[100%]">
      <div className="bg-white w-[100%">
        <div className="bg-[#F2F1F1] w-full flex justify-between p-5">
          <div className="w-1/2 flex  gap-5 p-5">
            <div className=" hidden lg:flex border border-gray-200 lg:items-center lg:rounded-full lg:gap-5 lg:p-1 lg:pl-5">
              <h1 className="text-sm">xyz@gmail.com</h1>
              <button className="bg-white rounded-full py-3  px-10 text-sm font-semibold">
                Copy
              </button>
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <button className="bg-black text-white px-5 py-2 text-sm rounded-full font-semibold">
                Email
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white px-8 md:px-10 py-2 md:py-4  text-sm rounded-full font-semibold">
                CV
              </button>
            </div>
          </div>
          <div className="  hidden  w-1/2 lg:flex  lg:justify-end  lg:items-center lg:gap-3 lg:p-5">
            <h1>Linkdin /</h1>
            <h1>Dribble /</h1>
            <h1>Instagram</h1>
          </div>
          <div className=" flex justify-center items-center gap-2 p-5 lg:hidden">
            <FaLinkedin className="h-5 w-5" />
            <CiGlobe className="h-5 w-5" />
            <FaInstagram className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
