import React from "react";
import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
    <div className='p-4 my-4 text-white text-xl hover:bg-gray-200'>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
