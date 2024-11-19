import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="border-2 border-gray-100 rounded-2xl bg-base-300 flex flex-col items-center">
      {categories.map((category) => (
        <button
          className="btn text-xl px-7 pb-1  w-40 mt-3 mb-3"
          key={category.id}
        >
          <NavLink to={`/category/${category.category}`}>
            {category.category}
          </NavLink>
        </button>
      ))}
    </div>
  );
};

export default Categories;
