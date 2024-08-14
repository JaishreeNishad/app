import React from "react";
import Image from "next/image";
import InfiniteCarousel from "./components/InfiniteCarosal";
import { PiArrowLineUpRightLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="bg-[#F9F9F9] rounded-b-[120px] border-b border-gray-100">
      <div className="bg-[#F2F1F1] flex justify-center items-center rounded-b-[120px] border-b border-gray-100">
        <div className="flex flex-col justify-center items-center p-6 sm:p-10">
          <div className=" border-spacing-5 border-2 border-white flex  items-center  rounded-full h-20 sm:h-32 w-20 sm:w-32">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
              alt="xyz"
              className=" rounded-full  h-20 sm:h-32 w-20 sm:w-32"
            />
            {/* <button className="bg-white px-8 animate-bounce -ml-4 font-semibold rotate-6 text-black rounded-full border border-gray-50">
              xyz nishad
            </button> */}
          </div>

          <h1 className="text-2xl sm:text-5xl font-semibold flex items-center text-center bg-gradient-to-r from-gray-950 to-gray-500 bg-clip-text text-transparent">
            Building digital
            <br /> products, brands, and <br />
            experience.
          </h1>

          <button className="bg-black text-white flex gap-2 items-center px-5 sm:px-8 py-2 sm:py-5 mt-10 mb-20 rounded-full text-sm hover:underline cursor-pointer ">
            Latest Shots
            <PiArrowLineUpRightLight className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex  items-center ">
        <InfiniteCarousel />
      </div>
    </div>
  );
};

export default Home;
