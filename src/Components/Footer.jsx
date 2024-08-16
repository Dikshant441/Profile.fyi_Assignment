import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="mb-4">
            We are a company dedicated to providing the best services in the
            industry.
          </p>
          <Link to="/about" className="text-blue-400 hover:underline">
            Learn More
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            Email:{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-400 hover:underline"
            >
              singhdikshant200@gmail.com
            </a>
          </p>
          <p>Phone: (+91) 7339895383</p>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-4 mt-6">
        <p>
          &copy; {new Date().getFullYear()} Dikshant Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
