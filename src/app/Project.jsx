import React from "react";
import { IoMailOutline } from "react-icons/io5";

const Project = () => {
  return (
    <div className="p-11 sm:p-24 flex flex-col justify-center items-center rounded-t-[150px] bg-[#F9F9F9] ">
      <div className="bg-[#F2F1F1] border-2 border-gray-400  flex  items-center p-5 rounded-full h-20 sm:h-32 w-20 sm:w-32">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-r9dIVPSvBgm0M1vSPE8DDt8jKyN5RybwQ&s"
          alt="xyz"
          className=" rounded-full"
        />
      </div>
      <h1 className="pt-5 text-2xl sm:text-6xl text-center font-semibold bg-gradient-to-r from-gray-950 to-gray-500 bg-clip-text text-transparent ">
        Tell me about your next <br />
        project
      </h1>
      <div className="flex gap-3 pt-10">
        <button className="bg-black text-nowrap sm:text-center text-xs sm:text-sm text-white px-5 sm:px-7 py-2 sm:py-3 gap-2 rounded-full border-4 border-gray-100 flex items-center justify-center">
          <IoMailOutline />
          Email Me
        </button>
        <button className="bg-white text-black text-xs sm:text-sm px-5 sm:px-7 py-2 sm:py-3 font-medium rounded-full border-4 border-gray-100">
          WhatsApp
        </button>
      </div>
      <hr className="w-full h-0.5 mt-11 sm:mt-24" />
      <div className="flex justify-between w-full  items-center  sm:pt-10 sm:pb-10">
        <div className="text-xs sm:text-sm ">2024 All rights reserved.</div>
        <div className="flex gap-2 ">
          <h1 className="text-xs sm:text-sm ">Linkdin /</h1>
          <h1 className="text-xs sm:text-sm ">Dribble /</h1>
          <h1 className="text-xs sm:text-sm ">Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
