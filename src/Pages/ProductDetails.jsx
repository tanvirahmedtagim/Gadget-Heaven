import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { addToStoredCartList, addToStoredWishList } from "../utilities";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const [isWishlistDisabled, setIsWishlistDisabled] = useState(false);

  const handleCart = (product) => {
    addToStoredCartList(product);
  };
  const handleWishList = (product) => {
    addToStoredWishList(product);
    setIsWishlistDisabled(true);
  };

  const { id } = useParams();
  const productId = parseInt(id);
  const products = useLoaderData();
  const product = products.find((product) => product.id === productId);
  const { image, title, price, description, specifications, rating } = product;
  return (
    <div className="min-h-[400px] relative bg-[#9538E2] pb-80 mb-72 flex flex-col justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product Details |Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-center">
        <div className="max-w-4xl pt-6">
          <h1 className="text-3xl font-bold text-white">Product Details</h1>
          <p className="py-6 max-w-2xl mx-auto text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="absolute  top-40 z-50 w-4/5 mx-auto">
        <div className="h-[563px] p-6 bg-base-300  rounded-3xl">
          <div className=" h-full rounded-lg">
            <div className="flex h-full flex-col gap-8  lg:flex-row">
              <img
                src={image}
                className="max-w-[33%] object-contain rounded-lg h-full"
              />
              <div className="flex flex-col  gap-5">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-xl font-semibold">Price:$ {price}</p>
                <div className="badge bg-[#d0e9c7] text-[#309C08] h-8 w-20 border-[#309C08]">
                  In Stock
                </div>
                <p className="text-lg text-gray-500">{description}</p>
                <div>
                  <h1 className="text-lg font-bold mb-3">Specification:</h1>

                  {specifications.map((specification, index) => (
                    <li key={index} className="list-decimal">
                      {specification}
                    </li>
                  ))}
                </div>
                <div>
                  <h1 className="text-lg font-bold mb-3">Rating:</h1>
                  <div className="flex items-center gap-3">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <div className="bg-base-200 py-1 px-3 rounded-full border">
                      {rating}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center ">
                  <button
                    onClick={() => handleCart(product)}
                    className="btn font-bold text-lg hover:text-black text-white bg-[#9538E2]"
                  >
                    Add To Cart
                    <span>
                      <BsCart3></BsCart3>
                    </span>
                  </button>
                  <button
                    onClick={() => handleWishList(product)}
                    disabled={isWishlistDisabled}
                    className={`btn rounded-full ${
                      isWishlistDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
