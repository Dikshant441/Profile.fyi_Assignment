import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../stote/cartSlice";
import Header from "./Header";
import EmptyCart from "../utils/EmptyCart";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="mt-24 p-2 flex flex-col items-center">
      <h1 className=" mb-2 text-2xl font-bold text-orange-500">Cart</h1>

      <Header />
      {cart.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col mb-4 mx-2"
        >
          <div className="p-2 flex flex-row">
            <img
              src={item.thumbnail}
              alt="product image"
              className="w-20 h-20 object-cover"
            />
            <div className="ml-4">
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
            <div className="flex-grow"></div>
            <button
              className="w-20 p-[6px] mb-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 mt-auto"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-center mb-4 w-full sm:w-3/4 md:w-2/3 lg:w-2/4">
        {cart.length === 0 ? (
          <div>
            <EmptyCart />
          </div>
        ) : (
          <div className="flex justify-around">
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="text-lg font-bold text-gray-800 mt-4">
              Total Price: {totalPrice}.00$
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
