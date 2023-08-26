import React, { useState } from "react";
import logo from "../assets/WEB LOGO.png";
import { NavLink } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex flex-col fixed gap-2 md:px-0 px-4 h-auto items-center justify-center bg-white w-full z-[999]">
      <img
        src={logo}
        alt="logo"
        className="hidden md:flex lg:hidden md:w-80 my-4 md:px-8"
      />
      <ul className="flex w-full items-center justify-between md:justify-evenly my-4  lg:my-8">
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition duration-500 ease-in-out hover:text-black hidden md:flex">
          <NavLink
            exact
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition duration-500 ease-in-out hover:text-black hidden md:flex">
          <NavLink
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition duration-500 ease-in-out hover:text-black hidden md:flex">
          <NavLink
            to="/careers"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Careers & Franchise
          </NavLink>
        </li>
        <li className="md:hidden lg:flex">
          <img src={logo} alt="logo" className="w-52 md:w-72 md:px-8" />
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition duration-500 ease-in-out hover:text-black hidden md:flex">
          <NavLink
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Services
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition duration-500 ease-in-out hover:text-black hidden md:flex">
          {" "}
          <NavLink
            to="/branches"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Branches
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition duration-500 ease-in-out hover:text-black hidden md:flex">
          <NavLink
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Contact Us
          </NavLink>
        </li>
        <div onClick={handleNav} className="md:hidden cursor-pointer ">
          {nav ? (
            <IoIosClose size={30} className="text-blue-900" />
          ) : (
            <IoIosMenu size={30} className=" text-blue-900" />
          )}
        </div>
      </ul>
      <ul
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r bg-white ease-in-out duration-500 z-50"
            : "ease-in-out duration-500 fixed left-[-100%] h-full top-0 z-50"
        }
      >
        <img src={logo} alt="logo" className="my-4 p-4 w-56" />
        <li className="text-blue-800 font-tnr border-b border-gray-300 text-lg p-2 cursor-pointer transition duration-500 ease-in-out hover:text-black">
          <NavLink
            exact
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr border-b border-gray-300 text-lg p-2 cursor-pointer transition duration-500 ease-in-out hover:text-black">
          <NavLink
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr border-b border-gray-300 text-lg p-2 cursor-pointer transition duration-500 ease-in-out hover:text-black">
          <NavLink
            to="/careers"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Careers & Franchise
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr border-b border-gray-300 text-lg p-2 cursor-pointer transition duration-500 ease-in-out hover:text-black">
          <NavLink
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Services
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr border-b border-gray-300 text-lg p-2 cursor-pointer transition duration-500 ease-in-out hover:text-black">
          {" "}
          <NavLink
            to="/branches"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Branches
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer transition p-2 duration-500 ease-in-out hover:text-black">
          <NavLink
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
