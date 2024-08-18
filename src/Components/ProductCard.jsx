import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../stote/cartSlice";
import { motion } from "framer-motion";

const ProductCard = ({ cartData, Product }) => {
  const { title, price, thumbnail, category } = cartData;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [message, setMessage] = useState("");

  const handleAddItem = (Product) => {
    const itemExists = cartItems.some((item) => item.id === Product.id);

    if (itemExists) {
      setMessage("Item already in cart!");
      setTimeout(() => setMessage(""), 1500); // Clear message after 1.5 seconds
    } else {
      dispatch(addItem(Product));
      setMessage("Item added to cart!");
      setTimeout(() => setMessage(""), 1500); // Clear message after 1.5 seconds
    }
  };

  return (
    <div className="relative bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <img
          src={thumbnail}
          alt="product image"
          className="w-full h-40 object-cover"
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
          Add to cart
        </button>

        {message && (
          <motion.div
            className={`absolute top-2 right-2 px-3 py-1 rounded-lg shadow-md ${
              message.includes("already") ? "bg-red-500" : "bg-green-500"
            } text-white`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
