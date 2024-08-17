import React from "react";

const Shimmer = () => {
  return (
    <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
      <DUmmyUI />
    </div>
  );
};

export default Shimmer;

const DUmmyUI = () => {
  return (
    <div className=" p-4 relative bg-gray-300 border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col animate-pulse">
      <div className="w-full h-44 bg-gray-400 mb-4"></div>
      <div className="w-full h-6 bg-gray-400 mb-2"></div>
      <div className="w-full h-6 bg-gray-400 mb-2"></div>
      <div className="w-1/2 h-6 bg-gray-400 mb-4"></div>
      <div className="w-1/2 h-6 bg-gray-400 mb-4"></div>
    </div>
  );
};
