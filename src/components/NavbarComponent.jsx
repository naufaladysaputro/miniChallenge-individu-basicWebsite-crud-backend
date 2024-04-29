import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="font-montserrat">
      <nav className="relative flex flex-wrap items-center justify-between  py-3 bg-white mb-3 z-10 shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl md:text-3xl font-bold leading-relaxed inline-block mr-4 px-2 py-2 whitespace-nowrap text-orange-700"
              href="#pablo"
            >
              NAUFAL
            </a>
            <button
            className="text-orange-700 cursor-pointer text-xl leading-none px-3 py-1 border 
              border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center items-center ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug text-orange-700 hover:opacity-75"
                  href="/"
                >
                  {/* <i className="fab fa-facebook-square text-lg leading-lg text-purple-700 opacity-75"></i> */}
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug text-orange-700 hover:opacity-75"
                  href="/data_mhs"
                >
                  {/* <i className="fab fa-twitter text-lg leading-lg text-purple-700 opacity-75"></i> */}
                  <span className="ml-2">Data Karyawan</span>
                </a>
              </li>
            </ul>
            <ul className="ml-auto">
              <li>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="px-4 py-2 text-md font-medium bg-orange-400 hover:bg-orange-700 
                    text-white rounded-md focus:outline-none focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-opacity-50"
                  >
                    Naufal
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
