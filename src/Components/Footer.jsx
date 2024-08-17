import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white h-42 flex flex-col justify-between">
      <div className="container mx-auto mt-3 mb-2 px-4 grid grid-cols-1 md:grid-cols-2 flex-grow">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="">
            We are a company dedicated to providing the best services in the
            industry.
          </p>
          <Link to="/about" className="text-blue-400 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold ">Contact Us</h2>


          <p className="">
            Email:{" "}
            <Link
              href="mailto:support@example.com"
              className="text-blue-400 hover:underline"
            >
              singhdikshant200@gmail.com
            </Link>
            {" "}
            <span>Phone: (+91) 7339895383</span>
          </p>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-2">
        <p>
          &copy; {new Date().getFullYear()} Dikshant Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
