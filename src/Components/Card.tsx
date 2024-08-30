import React from 'react';

interface CardProps {
  formState: {
    firstName: string;
    lastName: string;
    status: "active" | "inactive";
  };
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ formState, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="font-bold text-lg mb-2">
          {formState.firstName} {formState.lastName}
        </div>
        <p className="text-gray-700 text-base">
          Status: {formState.status === "active" ? "Active" : "Inactive"}
        </p>
      </div>
      <div className="flex justify-between p-4">
        <button
          onClick={onEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
