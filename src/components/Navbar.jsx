import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border border-b fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-[#000000] hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a
                href="#"
                className="text-[#000000] hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Background
              </a>
              <a
                href="#"
                className="text-[#000000] hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </a>
              <a
                href="#"
                className="text-[#000000] hover:bg-cyan-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-500 focus:text-white">
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-600 hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Background
          </a>
          <a
            href="#"
            className="text-gray-600 hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Skills
          </a>
          <a
            href="#"
            className="text-gray-600 hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
