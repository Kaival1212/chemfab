import { Suspense, useEffect, useState } from 'react';

function NavBar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
      <img src="/cover.svg" className="w-64 h-64 bg-contain" alt="Logo" />
      {screenSize > 640 ? (
        <ul className="flex gap-6 items-center cursor-pointer">
          <a href='#hero'>
            <li className="text-gray-700 hover:text-gray-900">Home</li>
          </a>
          <a href='#about'>
            <li className="text-gray-700 hover:text-gray-900">About</li>
          </a>
          <a href='#products'><li className="text-gray-700 hover:text-gray-900">Products</li></a>
          <a href='#contact'><li className="text-gray-700 hover:text-gray-900">Contact</li></a>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Get a Quote
          </li>
        </ul>
      ) : (
        <div className="relative">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setShowMenu((e) => !e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="absolute top-10 right-0 bg-white/90 w-40 backdrop-blur-sm rounded-md shadow-lg p-4">

              <ul className="space-y-2">
                <a href='#hero'>
                  <li className="text-gray-700 hover:text-gray-900">Home</li>
                </a>
                <a href='#about'>
                  <li className="text-gray-700 hover:text-gray-900">About</li>
                </a>                <li className="text-gray-700 hover:text-gray-900">Service</li>
                <li className="text-gray-700 hover:text-gray-900">Products</li>
                <li className="text-gray-700 hover:text-gray-900">Contact</li>
                <li className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Get a Quote
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavBar;