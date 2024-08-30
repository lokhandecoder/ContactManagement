import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-30 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <div className={`fixed z-40 inset-y-0 left-0 bg-red-500 w-64 h-screen transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0 lg:static lg:transform-none`}>
        <nav className="">
          <Link to="/" className="block py-5 px-6 text-white hover:bg-red-700">Contact</Link>
          <Link to="/charts" className="block py-5 px-6 text-white hover:bg-red-700">Charts & Maps</Link>
        </nav>
      </div>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
