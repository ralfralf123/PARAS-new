import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import bgAbout from "../assets/About Us Page-28.png";
import el1 from "../assets/About Us Page-08.png";
import el2 from "../assets/About Us Page-09.png";
import el3 from "../assets/About Us Page-10.png";
import el4 from "../assets/About Us Page-11.png";
import dot from "../assets/About Us Page-13.png";
import dotActive from "../assets/About Us Page-12.png";
import Footer from "../components/Footer";

const About = () => {
  const desc = [
    "PARAS GARMENTS ALTER STATION is in the businesses of retail and wholesale of branded garments  export/import overruns, food carts, build and sell construction, PARAS ALTER STATION franchise, and garments repair and alteration services.",

    "PARAS ALTER STATION was established on August 15, 2008, as a service provider for repair and alteration of all types of garments and apparel, strategically located within the malls all over the metropolis.",

    "We started the operations of our very first branch - PARAS ALTER STATION at Cherry Foodarama Supermarket (Now, it is SM Cherry Congressional) in Congressional Ave., QC.",

    "March 1, 2009, we penetrated the SM Superammls, Robinsons Malls, Ever Gotesco Malls, and Ayala Malls. We are continually expanding our branches to some other strategic placed to just meet the needs of our customers and to be accessible from wherever they are.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToDesc = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % desc.length); 
    }, 7000);

    return () => clearInterval(interval);
  },[]);
  
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <NavBar />
        <img
          src={bgAbout}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full items-start justify-center px-4 md:px-8 lg:px-24 pt-24">
          <h1 className="text-blue-900 text-6xl lg:text-7xl font-bold font-tnr mb-8">
            How it started...
          </h1>
          <div className="md:w-9/12 lg:w-7/12 h-auto">
            <p className="font-cambria text-xl lg:text-2xl w-full h-52 md:h-36 transition ease-in-out duration-500 text-justify">
              {desc[currentIndex]}
            </p>
            <div className="flex justify-center m-1">
              {desc.map((descs, slideIndex) => (
                <img
                  key={slideIndex}
                  onClick={() => goToDesc(slideIndex)}
                  src={currentIndex === slideIndex ? dotActive : dot}
                  alt="dot"
                  className={`w-10 cursor-pointer transition ease-in-out duration-300 delay-75 ${
                    currentIndex === slideIndex
                      ? "scale-125"
                      : "hover:scale-125"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-start w-full">
            <img src={el1} alt="el1" className="md:w-12/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-end">
            <h1 className="text-5xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Mission
            </h1>
            <p className="font-cambria text-xl lg:text-2xl my-4 w-11/12 text-right">
              To provide our customers excellent service and quality of
              workmanship in order to meet, exceed and satisty their needs and
              expectations.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full flex justify-end md:hidden ">
            <img src={el3} alt="el3" className="w-80 md:w-10/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-start">
            <h1 className="text-5xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Vision
            </h1>
            <p className="font-cambria text-xl lg:text-2xl my-4 w-11/12 text-left md:text-justify">
              To be the leading service provider in the garments repair and
              alteration industry by helping our customers protect their most
              expensive wardrobe, and be able to use it overtime. <br /> <br />{" "}
              In everything we do, We put God First.
            </p>
          </div>
          <div className="w-1/2 md:flex justify-end hidden">
            <img src={el3} alt="el3" className="w-96 md:w-10/12" />
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:hidden flex w-full justify-end">
            <img src={el2} alt="el2" className="w-96 md:w-12/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-start">
            <h1 className="text-5xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Core Value
            </h1>
            <p className="font-cambria text-xl lg:text-2xl my-4 w-11/12 text-justify">
              We will ensure that our customers are happy and satisfied, through
              quality workmanship, fast service, and friendly, polite staff.
            </p>
          </div>
          <div className="w-1/2 hidden md:flex">
            <img src={el2} alt="el2" className="w-12/12" />
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 w-full flex justify-start">
            <img src={el4} alt="el4" className="w-80 md:w-10/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-end">
            <h1 className="text-5xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Principle
            </h1>
            <p className="font-cambria text-xl lg:text-2xl my-4 w-11/12 text-right">
              To introduce God through our actions and be able to see us who we
              are in Christ.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
