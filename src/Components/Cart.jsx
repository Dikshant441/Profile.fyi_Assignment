import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../stote/cartSlice";
import Header from "./Header";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const id = cart.id;

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    
    <div className="mt-24 p-2">
      <Header/>
      {cart.map((item, index) => (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col mb-4">
          <div className="p-4 flex flex-col flex-grow">
            <img
              src={item.thumbnail}
              alt="product image"
              className="w-full h-48 object-cover"
            />
            <h1 className="text-base font-semibold mb-2 line-clamp-2">
              {item.title}
            </h1>
            <h3 className="text-base font-semibold mb-2 line-clamp-2">
              {item.category}
            </h3>
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              {item.price}.00$
            </h2>

            <div className="flex-grow"></div>
            <button
              className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 mt-auto"
              onClick={() => handleRemoveItem(item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
