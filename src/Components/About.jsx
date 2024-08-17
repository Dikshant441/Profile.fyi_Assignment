import React from "react";

const About = () => {
  return (
    <div className="mt-24 p-4 flex flex-col items-center">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 bg-white border border-gray-300 rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">About Me</h1>
        <p className="text-lg text-gray-700">
          Hello! I'm Dikshant Singh, a passionate web developer with a strong
          focus on building efficient, user-friendly, and modern web
          applications. With experience in Javascript, React.js, Next.js, and Node.js more other
          technologies, I strive to create seamless digital experiences that
          meet both user and business needs. My journey in web development has
          allowed me to work on diverse projects, and I'm always eager to learn
          and adapt to new challenges.
        </p>
      </div>

      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 bg-white border border-gray-300 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          Project Information
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech Stack</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>React.js for front-end development</li>
          <li>Redux and Redux toolkit for state management</li>
          <li>Javascript for write logic</li>
          <li>Tailwind CSS for responsive design and Framer motion</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Key Features
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Responsive e-commerce platform</li>
          <li>Dynamic Products API</li>
          <li>User can add, delete items in cart and can clear cart</li>
          <li>Cart functionality with quantity adjustments</li>
          <li>Checkout process with detailed price breakdown</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
