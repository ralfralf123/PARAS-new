import React, { useState } from "react";
import logo from "../assets/PAS Logo - Black Text Blue R.png";
import { NavLink } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex md:flex-col md:items-center lg:flex-row fixed px-4 lg:px-12 xl:px-24 py-2 h-auto bg-white w-full z-[999]">
      <img
        src={logo}
        alt="logo"
        className="flex w-48 my-2"
      />
      <ul className="flex w-full items-center justify-end md:justify-between lg:ml-12 xl:ml-36 my-4  lg:my-8">
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          <NavLink
            exact
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          <NavLink
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          <NavLink
            to="/careers"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
            }
          >
            Careers & Franchise
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          <NavLink
            to="/services?source=generalAlteration"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
            }
          >
            Services
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          {" "}
          <NavLink
            to="/branches"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
            }
          >
            Branch Locator
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          <NavLink
            to="/news"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
            }
          >
            News & Events
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr text-lg cursor-pointer hidden md:flex">
          <NavLink
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800 hover:text-black transition ease-in-out duration-300"
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
            to="/services?source=generalAlteration"
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
            Branch Locator
          </NavLink>
        </li>
        <li className="text-blue-800 font-tnr border-b border-gray-300 text-lg p-2 cursor-pointer transition duration-500 ease-in-out hover:text-black">
          {" "}
          <NavLink
            to="/news"
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-blue-800"
            }
          >
            News & Events
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
