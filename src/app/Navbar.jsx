import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-50">
      <div className="bg-white ">
        <div className="bg-gray-50 flex justify-between p-5">
          <div className="w-1/2 flex  gap-5 p-5">
            <div className="flex border border-gray-200 items-center rounded-full gap-5 p-1 pl-5">
              <h1 className="text-sm">xyz@gmail.com</h1>
              <button className="bg-white rounded-full py-3 font-medium px-10">
                Copy
              </button>
            </div>

            <button className="bg-white px-14 p-0 font-medium text-lg rounded-full">
              CV
            </button>
          </div>
          <div className="w-1/2 flex  justify-end  items-center gap-3 p-5">
            <h1>Linkdin /</h1>
            <h1>Dribble /</h1>
            <h1>Instagram</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
