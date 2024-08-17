import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((store) => store.cart.items);

  // Calculate total price and number of items
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate number of items
  const numberOfItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // State for discount percentage
  const [discountPercentage, setDiscountPercentage] = useState(10); // Default 10%

  // Calculate discount, platform fee, delivery charge, and total amount
  const discount = (totalPrice * discountPercentage) / 100;
  const platformFee = 10; //  platform fee
  const deliveryCharge = 30; //  delivery charge
  const totalAmount = totalPrice - discount + platformFee + deliveryCharge;
  const amountSaved = discount;

  return (
    <div className="mt-24 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">Checkout</h1>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 bg-white border border-gray-300 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Price Details</h2>
        <div className="flex justify-between mb-2">
          <span>Price ({numberOfItems} items)</span>
          <span>${totalPrice}.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount ({discountPercentage}%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Platform Fee</span>
          <span>${platformFee}.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery Charge</span>
          <span>${deliveryCharge}.00</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-4 text-green-600">
          <span>Total Amount You Will Save</span>
          <span>${amountSaved.toFixed(2)}</span>
        </div>

        <div className="mt-4">
          <label htmlFor="discount" className="block mb-2 font-semibold">
            Select Discount:
          </label>
          <select
            id="discount"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value={5}>5% Discount</option>
            <option value={10}>10% Discount</option>
            <option value={15}>15% Discount</option>
            <option value={20}>20% Discount</option>
          </select>
        </div>
      </div>

      {/* Button to proceed to payment */}
      <button className="p-2 m-4 bg-orange-500 text-white font-semibold rounded-lg">
        Continue to Pay
      </button>
    </div>
  );
};

export default Checkout;
