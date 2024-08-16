import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-2">
          You're on the wrong path
        </h2>
        <p className="text-gray-500 mt-4">Something went wrong!</p>
        {err && (
          <p className="mt-4 text-lg text-red-500">
            {err.status} - {err.statusText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Error;
