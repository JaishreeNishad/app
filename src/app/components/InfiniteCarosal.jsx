"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const InfiniteCarousel = () => {
  return (
    <div className="w-full mt-20 sm:mt-28 mb-20 sm:mb-28">
      <Marquee>
        <div className="flex items-center  gap-20">
          <img
            src="https://framerusercontent.com/images/S7Wn9R0XUGbZP76whfsn435N8o.svg"
            className="h-6 sm:h-12 w-20 sm:w-32"
            alt="pic"
          ></img>
          <img
            src="https://framerusercontent.com/images/9kIk1y3XOCY94YnLwCDU3SSHL0I.svg"
            className="h-6 sm:h-12 w-20 sm:w-32"
            alt="pic"
          ></img>
          <img
            src="https://framerusercontent.com/images/Pjlzorsbp4GK4U9nqYaPWgkPs.svg"
            className="h-6 sm:h-12 w-20 sm:w-32"
            alt="pic"
          ></img>
          <img
            src="https://framerusercontent.com/images/nPT3My9mYZPzyjp42aeGQACk4p4.svg"
            className="h-6 sm:h-12 w-20 sm:w-32"
            alt="pic"
          ></img>
          <img
            src="https://framerusercontent.com/images/XFWQcHTyPCmpljR7ttDhwueN9k.svg"
            className="h-6 sm:h-12 w-20 sm:w-32"
            alt="pic"
          ></img>
          <img
            src="https://framerusercontent.com/images/FeK7mQ25Aj92hjXNE7801ccv4.svg"
            className="h-6 sm:h-12 w-20 sm:w-32"
            alt="pic"
          ></img>
        </div>
      </Marquee>
    </div>
  );
};

export default InfiniteCarousel;
