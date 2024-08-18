import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../stote/cartSlice";

const Popup = ({ message, onClose }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRedirect = () => {
    dispatch(clearCart());
    onClose(); // close the popup
    setTimeout(() => {
      navigate("/"); // redirect to home page after closing the popup
    }, 500); // delay for a smooth user experience
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-4">{message}</h2>
        <button
          className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg"
          onClick={handleRedirect}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Popup;
