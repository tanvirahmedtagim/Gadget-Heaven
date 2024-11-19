import React, { useState } from "react";
import MiniCarts from "./MiniCarts";
import { SlEqualizer } from "react-icons/sl";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import modalImg from ".././assets/Group.png";

const Cart = ({ products, cartList, setCartList, handleRemoveCart }) => {
  const handleSortByPrice = () => {
    const sortProduct = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortProduct);
  };
  const total = cartList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const navigate = useNavigate();

  // Handle purchase
  const handlePurchase = () => {
    setIsModalOpen(true);
    setFinalTotal(total);
    setCartList([]);
    localStorage.removeItem("cart-list");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <div className="flex flex-col gap-10 pb-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">Carts</h1>
          <div className="flex gap-3 items-center">
            <p className="text-xl font-semibold">
              Total Price:${total.toFixed(2)}
            </p>
            <button
              onClick={() => handleSortByPrice(products.price)}
              className="btn rounded-3xl border flex gap-2 border-[#9538E2] text-[#9538E2]"
            >
              Sort by Price <SlEqualizer fontSize="1.5em" />
            </button>
            <button
              onClick={handlePurchase}
              disabled={cartList.length === 0}
              className="btn rounded-3xl bg-[#9538E2] hover:text-black font-bold text-white"
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="w-4/5 mx-auto flex flex-col gap-5 ">
          {cartList.map((product) => (
            <MiniCarts
              key={product.id}
              product={product}
              handleRemoveCart={handleRemoveCart}
            ></MiniCarts>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
          contentLabel="Purchase Confirmation"
        >
          <div className="px-6">
            <div
              className="flex flex-col justify-center items-center
          gap-4 px-5 mb-4"
            >
              <img className="w-20 h-20" src={modalImg} alt="" />
              <h2 className="text-center text-3xl font-bold">
                Payment Successfully
              </h2>
            </div>
            <hr />
            <div
              className="flex flex-col justify-center items-center
          gap-2 px-5 mt-3"
            >
              <p>Thank you for your purchase!</p>
              <h1 className="mb-4 font-bold">Total:$ {finalTotal.toFixed(2)}</h1>
              <button className="btn px-20" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
