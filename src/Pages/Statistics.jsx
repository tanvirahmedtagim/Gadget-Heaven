import React from "react";
import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div>
      <div className="bg-[#9538E2] flex flex-col justify-center items-center mb-3">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Statistics | Gadget Heaven</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold pt-6 text-white">Statistics </h1>
            <p className="py-6 max-w-2xl mx-auto text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold">Statistics</h1>
      <div></div>
    </div>
  );
};

export default Statistics;
