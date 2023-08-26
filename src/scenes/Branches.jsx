import React from "react";
import NavBar from "../components/NavBar";
import bg from "../assets/BRANCHES-32 (1).png";
import card1 from "../assets/BRANCHES-24.png";
import card2 from "../assets/BRANCHES-25.png";
import card3 from "../assets/BRANCHES-26.png";
import card4 from "../assets/BRANCHES-27.png";
import card5 from "../assets/BRANCHES-28.png";
import card6 from "../assets/BRANCHES-29.png";
import card7 from "../assets/BRANCHES-30.png";
import card8 from "../assets/BRANCHES-32.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Branches = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <NavBar />
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover h-screen w-full"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full items-center justify-center px-12 pt-64">
          <h1 className="text-white text-2xl lg:text-5xl font-bold font-tnr mb-4 text-center md:w-5/6">
            Welcome to the Paras Alter Station Branch Directory where you can
            view maps, and check available stores and services at different
            malls nationwide!
          </h1>
          <input
            type="text"
            className="w-72 lg:w-96 h-12 rounded-3xl bg-gray-300 opacity-50 mt-12 px-4 "
            id="search-form"
          ></input>
        </div>
      </section>
      <section className="w-full h-auto flex flex-col bg-slate-300 justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 lg:m-24">
          <img
            src={card1}
            alt="card1"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
          <img
            src={card2}
            alt="card2"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
          <Link to="/details">
            <img
              src={card3}
              alt="card3"
              className="p-6 transition ease-in-out duration-300 hover:scale-110"
            />
          </Link>
          <img
            src={card4}
            alt="card4"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
          <img
            src={card5}
            alt="card5"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
          <img
            src={card6}
            alt="card6"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
          <img
            src={card7}
            alt="card7"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
          <img
            src={card8}
            alt="card8"
            className="p-6 transition ease-in-out duration-300 hover:scale-110"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Branches;
