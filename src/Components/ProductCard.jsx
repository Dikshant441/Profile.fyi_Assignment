import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../stote/cartSlice";

const ProductCard = ({ cartData, Product }) => {
  const { title, price, thumbnail, category } = cartData;
  const dispatch = useDispatch();

  const handleAddItem = (Product) => {
    dispatch(addItem(Product));
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <img
          src={thumbnail}
          alt="product image"
          className="w-full h-48 object-cover"
        />
        <h1 className="text-base font-semibold mb-2 line-clamp-2">{title}</h1>
        <h3 className="text-base font-semibold mb-2 line-clamp-2">
          {category}
        </h3>
        <h2 className="text-lg font-bold text-gray-700 mb-4">{price}.00$</h2>

        <div className="flex-grow"></div>
        <button
          className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 mt-auto"
          onClick={() => handleAddItem(Product)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
