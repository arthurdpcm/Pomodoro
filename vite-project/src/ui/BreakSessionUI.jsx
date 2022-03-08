import React from "react";

export const BreakSessionContainer = ({ children, ...props }) => {
  return (
    <div className="flex flex-col items-center" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel = ({ children, ...props }) => {
  return (
    <p className="text-lg text-teal-200" {...props}>
      {children}
    </p>
  );
};

export const BreakSessionTime = ({ children, ...props }) => {
  return (
    <p className="text-4xl font-bold text-white" {...props}>
      {children}
    </p>
  );
};

export const PlusMinusButton = ({ children, ...props }) => {
  return (
    <button
      // className="mt-2 text-lg text-gray-800 px-3 py-1 bg-teal-300 rounded text-teal-900"
      className="px-3 py-1 text-teal-900 bg-teal-200 border-2
      border-teal-900 border-solid rounded transition hover:bg-teal-900 hover:text-teal-200  duration-300 "
      {...props}
    >
      {children}
    </button>
  );
};

export const PlusMinusButtonContainer = ({ children, ...props }) => {
  return (
    <div {...props} className="grid grid-flow-col gap-2 rounded ">
      {children }
    </div>
  );
};
