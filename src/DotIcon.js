import React from "react";

export const DotIcon = ({ size, height, width, ...props }) => {
  return (
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning-400 opacity-75"></span>
        <span className="relative rounded-full h-3 w-3 bg-warning-500"></span>
    </span>
  );
};
