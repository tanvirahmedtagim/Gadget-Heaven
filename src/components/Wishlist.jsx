import React from "react";
import MiniWish from "./MiniWish";

const Wishlist = ({ wishList, handleRemoveWishList }) => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">WishLists</h1>
      </div>
      <div className="w-4/5 mx-auto flex flex-col gap-5 ">
        {wishList.map((product) => (
          <MiniWish 
            key={product.id}
            handleRemoveWishList={handleRemoveWishList}
            product={product}
          ></MiniWish>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
