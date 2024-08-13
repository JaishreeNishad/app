import React from "react";

const Brands = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="flex items-center justify-center text-center p-20">
        <h1 className="text-4xl font-bold">
          Collaborate with brands and agencies to
          <br /> create impactful results.
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-56 h-0.5 bg-slate-200" />
        <button className="bg-white px-10 py-5 -rotate-12 text-black rounded-full border border-gray-50">
          Services
        </button>
        <div className="w-56 h-0.5 bg-slate-200" />
      </div>
      <div className="p-10 flex items-center justify-center gap-5">
        <div className="flex flex-col gap-5">
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/771/729/non_2x/ui-ux-designer-icon-design-free-vector.jpg"
            alt="logo"
            className="h-8 w-8"
          />
          <h1 className="text-gray-800 font-semibold text-lg">UX & UI</h1>
          <p>
            Designing interfaces that
            <br /> are intuitive,efficient,and
            <br /> enjoyable to use.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy19wddsArgyls0O3mKTin0V_ngx6a_8Is21rhfF67mkG-FcmqHqklW_xT8Q&s"
            alt="logo"
            className="h-8  w-8"
          />
          <h1 className="text-gray-800 font-semibold text-lg">
            Web & Mobile App
          </h1>
          <p>
            Designing interfaces that
            <br /> are intuitive,efficient,and
            <br /> enjoyable to use.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBg9WG1gLL7WefcfNoKEW9W70gVOwD-5d6PBYg_-oyO2t8GHpAZoaILJ1GOw&s"
            alt="logo"
            className="h-8 w-8"
          />
          <h1 className="text-gray-800 font-semibold text-lg">
            Design & Creative
          </h1>
          <p>
            Designing interfaces that
            <br /> are intuitive,efficient,and
            <br /> enjoyable to use.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8DNokF1ZQV0b6UQIzsEDt8JK_lmQiyixG7LWf6KkRrGewMg06CqyJkmLiw&s"
            alt="logo"
            className="h-8 w-8"
          />
          <h1 className="text-gray-800 font-semibold text-lg">Development</h1>
          <p>
            Designing interfaces that
            <br /> are intuitive,efficient,and
            <br /> enjoyable to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
