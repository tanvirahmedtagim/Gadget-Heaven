import React from 'react';
import { MdDelete } from 'react-icons/md';

const MiniWish = ({product,handleRemoveWishList}) => {
  const {id, image, title, price, description } = product || {};
  return (
    <div className="border-2 border-gray-500 rounded-xl p-6 flex justify-between items-center">
      <div className="flex gap-8">
        <div className="w-[150px] h-[150px] ">
          <img className="h-full w-full rounded-xl" src={image} alt="" />
        </div>
        <div className="flex flex-col  gap-3">
          <h1 className="text-[24px] font-semibold">{title}</h1>
          <p className="text-lg">{description}</p>
          <p className="text-xl font-semibold">Price:$ {price}</p>
        </div>
      </div>
      <div>
        <button onClick={() => handleRemoveWishList(id)}>
          <MdDelete fontSize="1.5em"></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default MiniWish;