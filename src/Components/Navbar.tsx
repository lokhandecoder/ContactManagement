import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const pageTitle = location.pathname === "/" ? "Contact Page" : "Charts & Maps Page";

  return (
    <nav className="bg-blue-500 fixed w-full top-0 z-40 p-4 lg:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg lg:text-xl font-bold">
          {pageTitle}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
