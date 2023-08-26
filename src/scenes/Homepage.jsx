import React from "react";
import bg from "../assets/ELEMENTS-28.png";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import el1 from "../assets/ELEMENTS-07.png";
import el2 from "../assets/ELEMENTS-08.png";
import el3 from "../assets/ELEMENTS-09.png";
import el4 from "../assets/ELEMENTS-21.png";
import pin1 from "../assets/ELEMENTS-26.png";
import pin2 from "../assets/ELEMENTS-27.png";
import pin3 from "../assets/ELEMENTS-22.png";
import pin4 from "../assets/ELEMENTS-23.png";
import pin5 from "../assets/ELEMENTS-24.png";
import pin6 from "../assets/ELEMENTS-25.png";

import card1 from "../assets/ELEMENTS-14.png";
import card2 from "../assets/ELEMENTS-15.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <NavBar />
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover h-screen"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full items-center justify-center pt-64">
          <h1 className="text-white text-6xl md:text-7xl font-bold font-tnr mb-4 text-center">
            We measure to satisfy.
          </h1>
          <p className="text-white text-justify md:text-center text-xl md:text-2xl font-thin font-tnr mx-8 lg:mx-72">
            We are adaptable and flexible to changes to fit to the needs and
            requirements of our customers, and will continue to serve adhereing
            to the high standard and expectation our customers deserve to
            receive.
          </p>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col items-center">
        <h1 className="my-12 text-5xl font-tnr font-bold text-blue-900 text-center">
          Our <br />
          Services
        </h1>
        <div className="flex flex-col md:flex-row lg:mx-64 items-center gap-4 justify-center">
          <div className="w-1/2 flex flex-col items-center">
            <img src={el1} alt="el1" className="w-6/6 md:w-5/6" />
            <h1 className="font-cambria text-2xl md:text-3xl text-center">
              Basic Alteration
            </h1>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <img src={el2} alt="el2" className="w-6/6 md:w-5/6" />
            <h1 className="font-cambria text-2xl md:text-3xl text-center">
              General Alteration
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="h-full lg:px-24 px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="md:hidden">
            <img src={el3} alt="el3" className="w-12/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-5xl md:text-6xl font-cambria font-bold text-blue-900 my-4 text-center md:text-left">
              Why choose us?
            </h1>
            <p className="font-cambria text-xl md:text-2xl text-justify my-4">
              PARAS ALTER STATION (PAS) maintains its high standard in the
              garments repair and alteration services industry.
            </p>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <Button text="Read More" />
            </Link>
          </div>
          <div className="hidden md:flex w-1/2">
            <img src={el3} alt="el3" className="w-12/12" />
          </div>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="my-12 text-5xl font-tnr font-bold text-blue-900 text-center">
          Now Sewing
        </h1>
        <div className="flex justify-center md:w-3/4 lg:w-1/3 relative">
          <img src={el4} alt="el4" className="w-full  my-8" />
          <Link
            to="/details"
            onClick={() => window.scrollTo(0, 0)}
            className="absolute hover:scale-110 transition ease-in-out duration-500 z-50 w-20 right-[25%] "
          >
            <img
            src={pin1}
            alt="pin1"
          />
          </Link>
          <Link
            to="/details"
            onClick={() => window.scrollTo(0, 0)}
            className="absolute hover:scale-110 transition ease-in-out duration-500 z-50 w-20 top-[13%] right-[18%]"
          >
            <img
            src={pin2}
            alt="pin2"
            />
          </Link>
          <Link
            to="/details"
            onClick={() => window.scrollTo(0, 0)}
            className="absolute hover:scale-110 transition ease-in-out duration-500 z-50 w-20 top-[13%] right-[35%]"
          >
            <img src={pin6} alt="pin6" />
          </Link>
          <Link
            to="/details"
            onClick={() => window.scrollTo(0, 0)}
            className="absolute hover:scale-110 transition ease-in-out duration-500 z-50 w-20 top-[24%] right-[32%]"
          >
          <img
            src={pin5}
            alt="pin5"
          />
          </Link>
          <Link
            to="/details"
            onClick={() => window.scrollTo(0, 0)}
            className="absolute hover:scale-110 transition ease-in-out duration-500 z-50 w-20 top-[32%] right-[42%]"
          >
            <img
            src={pin4}
            alt="pin4"
            />
          </Link>
          <Link
            to="/details"
            onClick={() => window.scrollTo(0, 0)}
            className="absolute hover:scale-110 transition ease-in-out duration-500 z-50 w-20 bottom-[12%] right-[46%]"
          >
          <img
            src={pin3}
            alt="pin3"
          />
          </Link>
        </div>
        <Link to="/branches" onClick={() => window.scrollTo(0, 0)}>
          <Button text="View All" />
        </Link>
      </section>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="my-12 text-5xl font-tnr font-bold text-blue-900 text-center">
          Discount Cards
        </h1>
        <div className="flex flex-col md:flex-row mx-16 lg:mx-32 mb-12 h-1/2 md:h-auto">
          <div className="w-80 md:w-auto">
            <img src={card1} alt="card1" />
          </div>
          <div className="w-80 md:w-auto">
            <img src={card2} alt="card2" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-cambria text-2xl md:text-3xl font-bold ">
            AVAILABLE NATIONWIDE
          </h2>
          <h3 className="font-cambria text-2xl md:text-3xl">
            For Only P200.00
          </h3>
          <Button text="Apply Now" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
