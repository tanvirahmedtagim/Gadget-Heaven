import React, { useEffect, useState } from "react";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";
import { useLoaderData } from "react-router-dom";
import {
  getStoredCartList,
  getStoredWishList,
  removeCartItem,
  removeWishList,
} from "../utilities";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const products = useLoaderData();

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const productCartList = products.filter((product) =>
      storedCartListInt.includes(product.id)
    );

    setCartList(productCartList);
  }, []);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const productWishList = products.filter((product) =>
      storedWishListInt.includes(product.id)
    );

    setWishList(productWishList);
  }, []);
  const handleRemoveCart = (id) => {
    removeCartItem(id);
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const productCartList = products.filter((product) =>
      storedCartListInt.includes(product.id)
    );

    setCartList(productCartList);
  };
  const handleRemoveWishList = (id) => {
    removeWishList(id);
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const productWishList = products.filter((product) =>
      storedWishListInt.includes(product.id)
    );

    setWishList(productWishList);
  };

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });
  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "wishlist",
      });
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#9538E2] flex flex-col justify-center items-center mb-6">
        <div className="text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold pt-6 text-white">Dashboard</h1>
            <p className="py-6 max-w-2xl mx-auto text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-4 justify-center items-center pb-6">
              <div>
                <button
                  onClick={() => handleIsActiveState("cart")}
                  className={`${
                    isActive.cart
                      ? "btn px-12 rounded-3xl text-[#9538E2] text-lg font-extrabold"
                      : "btn px-12 rounded-3xl bg-[#9538E2] border-white text-white hover:text-black"
                  }`}
                >
                  Cart
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleIsActiveState("wishlist")}
                  className={`${
                    isActive.cart
                      ? "btn px-12 rounded-3xl bg-[#9538E2] border-white text-white hover:text-black "
                      : "btn px-12 rounded-3xl text-[#9538E2] text-lg font-bold"
                  }`}
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isActive.cart ? (
          <Cart
            products={products}
            cartList={cartList}
            setCartList={setCartList}
            handleRemoveCart={handleRemoveCart}
          ></Cart>
        ) : (
          <Wishlist
            products={products}
            wishList={wishList}
            handleRemoveWishList={handleRemoveWishList}
          ></Wishlist>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
