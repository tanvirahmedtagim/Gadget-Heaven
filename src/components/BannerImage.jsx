import React from "react";
import bannerImg from "../../src/assets/banner.jpg";

const BannerImage = () => {
  return (
    <div className="h-[563px] p-6 bg-base-100 bg-opacity-50 rounded-3xl">
      <img className="w-full h-full object-cover rounded-3xl" src={bannerImg} alt="" />
    </div>
  );
};

export default BannerImage;
