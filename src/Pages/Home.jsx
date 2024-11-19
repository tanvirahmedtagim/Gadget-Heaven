import React from "react";
import Banner from "../components/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Banner */}
      <Banner></Banner>
      <h1 className="my-20 text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      {/* Outlet */}
      {/* Menubar */}
      <div className="grid grid-cols-5 gap-4 pb-24">
        <div className="col-span-1 flex flex-col">
          <Categories categories={categories}></Categories>
        </div>
        <div className="col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
