import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "../stote/cartSlice"; // Make sure to add updateQuantity action
import EmptyCart from "../utils/EmptyCart";
import { Link } from "react-router-dom";
import CartItem from "./CartItems";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-24 p-2 flex flex-col items-center">
      <h1 className="mb-2 text-2xl font-bold text-orange-500">Cart</h1>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleQuantityChange={handleQuantityChange}
          />
        ))
      )}
      <div className="text-center mb-4 w-full sm:w-3/4 md:w-2/3 lg:w-2/4">
        {cart.length > 0 && (
          <div className="flex justify-between">
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="text-lg font-bold text-gray-800 mt-4">
              Total Price: {totalPrice}.00$
            </div>
            <Link to="/checkout">
              <div className="p-2 m-2 bg-orange-500 text-white font-semibold rounded-lg">
                Place Order
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
