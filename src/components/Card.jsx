import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, title, image, price, description, availability, rating } =
    product || {};
  return (
    <div>
      <div className="card border-2 h-[420px] border-gray-100 rounded-lg">
        <figure className="p-6 bg-base-200 h-[200px] object-cover">
          <img src={image} alt={title} className="rounded-xl h-full w-full" />
        </figure>
        <div className="card-body items-left">
          <h2 className="card-title">{title}</h2>
          <p className="font-medium text-xl">Price: {price}$</p>
          <div className="card-actions">
            <Link to={`/product-details/${id}`}>
              <button className="btn btn-outline btn-secondary font-semibold text-lg rounded-3xl">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
