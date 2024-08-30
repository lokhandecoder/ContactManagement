import React from "react";

function NoContactFound() {
  return (
    <div className="flex flex-col items-center justify-center h-80 p-4">
      <div className="text-xl font-semibold mb-2">No Contact Found</div>
      <div className="text-gray-600">Please add contact from the create contact button</div>
    </div>
  );
}

export default NoContactFound;
