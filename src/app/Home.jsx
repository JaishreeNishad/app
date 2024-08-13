import React from "react";
import Image from "next/image";
import InfiniteCarousel from "./components/InfiniteCarosal";

const Home = () => {
  return (
    <div className="bg-white rounded-b-[120px]">
      <div className="bg-gray-50 flex justify-center items-center rounded-b-[120px] border-gray-300">
        <div className="flex flex-col justify-center items-center p-10">
          <Image
            src="/person.jpg"
            width={150}
            height={100}
            alt="Picture of the author"
            className="rounded-full border-4 border-white "
          />
          <h1 className="text-5xl font-semibold flex items-center text-center bg-gradient-to-r from-gray-950 to-gray-500 bg-clip-text text-transparent">
            Building digital
            <br /> products, brands, and <br />
            experience.
          </h1>

          <button className="bg-black text-white mt-5 p-5 rounded-full text-xs">
            Latest Shots
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
