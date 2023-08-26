import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bg from "../assets/CAREERS_FRANCHISE-35.jpg";
import bg2 from "../assets/CAREERS_FRANCHISE-19.jpg";
import el3 from "../assets/CAREERS_FRANCHISE-11.png";
import Button from "../components/Button";
import el2 from "../assets/CAREERS_FRANCHISE-10.png";

const Careers = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col relative">
        <NavBar />
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full lg:items-start items-end justify-center px-6 pt-64">
          <h1 className="text-white lg:text-blue-900 text-5xl lg:text-7xl font-bold font-tnr xl:ml-24 mb-4">
            Careers at <br /> Paras Alter <br /> Station
          </h1>
        </div>
      </section>
      <section className="w-full h-screen relative ">
        <img
          src={bg2}
          alt="bg2"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute w-full h-full px-4 xl:px-24 flex flex-col md:flex-row justify-center items-end pb-20">
          <div className="flex md:hidden flex-col items-center justify-center mt-20">
            <img src={el3} alt="el3" className="w-72" />
            <h1 className="text-6xl lg:text-7xl font-cambria font-bold text-blue-900 my-4">
              Qualification
            </h1>
          </div>
          <div className="md:w-7/12">
            <p className="font-cambria text-xl lg:text-2xl text-justify my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w-full flex justify-center md:justify-start ">
              <Button text="Apply Now" />
            </div>
          </div>
          <div className="hidden w-5/12 md:flex flex-col items-end">
            <img src={el3} alt="el3" className="w-6/12" />
            <h1 className="text-5xl lg:text-7xl font-cambria font-bold text-blue-900 my-4">
              Qualification
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 lg:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="w-5/12">
            <img src={el2} alt="el2" className="md:w-9/12" />
          </div>
          <div className="md:w-7/12">
            <h1 className="text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4 text-center md:text-right">
              Be Part of our <br />
              Growing Partners!
            </h1>
            <p className="font-cambria text-xl lg:text-2xl my-4 text-justify md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex w-full justify-center md:justify-end">
              <Button text="Franchise Now" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careers;
