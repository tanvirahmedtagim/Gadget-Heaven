import React from "react";
import BannerImage from "./BannerImage";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero relative items-start pt-12 rounded-b-3xl bg-[#9538E2] min-h-[600px] mb-96">
      <div className="text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 max-w-2xl mx-auto text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn px-7 pb-1 bg-white text-xl font-bold rounded-full  text-[#9538E2]">
            <NavLink to="/dashboard"> Show Now</NavLink>
          </button>
        </div>
      </div>
      <div className="absolute top-80 z-50 w-4/5 mx-auto">
        <BannerImage></BannerImage>
      </div>
    </div>
  );
};

export default Banner;
