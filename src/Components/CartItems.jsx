import React from "react";

const CartItem = ({ item, handleRemoveItem, handleQuantityChange }) => {
  return (
    <div
      key={item.id}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col mb-4 mx-2"
    >
      <div className="p-2 flex flex-row items-center">
        <img
          src={item.thumbnail}
          alt="product image"
          className="w-20 h-20 object-cover"
        />
        <div className="ml-4 flex-grow">
          <h1 className="text-base font-semibold line-clamp-2">
            {item.title}
          </h1>
          <h3 className="text-base font-semibold line-clamp-2">
            {item.category}
          </h3>
          <h2 className="text-lg font-bold text-gray-700 mb-4">
            {item.price}.00$
          </h2>
        </div>
        <div className="flex items-center">
          <button
            className="p-1 bg-gray-300 rounded"
            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="p-1 bg-gray-300 rounded"
            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="ml-4 p-[6px] mb-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
          onClick={() => handleRemoveItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
