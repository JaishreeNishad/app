import React from "react";
import { IoMailOutline } from "react-icons/io5";

const Project = () => {
  return (
    <div className="p-24 flex flex-col justify-center items-center rounded-t-[150px] bg-white ">
      <div className="bg-gray-50 border-2 border-gray-400  flex items-center items-center p-5 rounded-full h-32 w-32">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-r9dIVPSvBgm0M1vSPE8DDt8jKyN5RybwQ&s"
          alt="xyz"
          className=" rounded-full  bg-red-500"
        />
      </div>
      <h1 className="pt-5 text-6xl text-gray-800 text-center font-bold ">
        Tell me about your next <br />
        project
      </h1>
      <div className="flex gap-3 pt-10">
        <button className="bg-black text-white px-7 py-3 gap-2 rounded-full border-4 border-gray-100 flex items-center justify-center">
          <IoMailOutline />
          Email Me
        </button>
        <button className="bg-white text-black px-7 py-3 font-medium rounded-full border-4 border-gray-100">
          WhatsApp
        </button>
      </div>
      <hr className="w-full h-0.5 mt-24" />
      <div className="flex justify-between w-full  items-center pt-10 pb-10">
        <div>2024 All rights reserved.</div>
        <div className="flex gap-2 ">
          <h1>Linkdin /</h1>
          <h1>Dribble /</h1>
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
