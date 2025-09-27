import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <FiMenu className="text-2xl text-gray-600" />
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaRegBell className="text-2xl text-gray-600" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </div>
        <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Online</span>
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;