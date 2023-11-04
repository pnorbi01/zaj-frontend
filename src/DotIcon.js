import React from "react";

export const DotIcon = ({ size, height, width, ...props }) => {
  return (
    <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning-400 opacity-75"></span>
        <span class="relative rounded-full h-3 w-3 bg-warning-500"></span>
    </span>
  );
};
