import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-center p-4 bg-red-300 shadow-lg rounded-lg">
        <img
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" 
          alt="Empty Cart"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-xl font-bold text-gray-800 mb-3">Your Cart is Empty</h1>
        <p className="text-base text-gray-600 mb-3">
          It looks like you haven't added any items to your cart yet.
        </p>
        <p className="text-base text-gray-600 mb-5">
          Browse our collection and find something you love!
        </p>
        <Link
          to="/"
          className="p-2 bg-red-500 text-white rounded-lg"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
