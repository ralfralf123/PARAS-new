import React from "react";
import NavBar from "../components/NavBar";
import bgServices from "../assets/BG-33.jpg";
import bg2 from "../assets/BG-34.jpg";
import bg3 from "../assets/BG-35.jpg";
import el2 from "../assets/SERVICES-15.png";
import el3 from "../assets/SERVICES-14.png";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <>
      <section className="w-full h-screen relative">
        <NavBar />
        <img
          src={bgServices}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute bottom-6 inset-0 flex flex-col w-full h-full px-12 items-end justify-end lg:px-24 pb-36">
          <h1 className="text-blue-800 text-5xl lg:text-7xl font-bold font-tnr mb-8">
            Our Services
          </h1>
          <p className="font-cambria text-lg lg:text-2xl lg:w-6/12 text-justify pl-8">
            We alter, repair, mend, re-style, re-size all men's and lady's
            fashion clothing as in back to original. (Dresses, skirts, slacks,
            denim pants, trousers, shorts, suits, jackets, shirts, blouses,
            uniform, patches, jeans, bathing suits, curtains)
          </p>
        </div>
      </section>
      <section className="w-full h-[120vh] md:h-screen relative">
        <img
          src={bg2}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute w-full h-screen md:px-12 lg:px-24 flex lg:items-start pt-12">
          <div className="w-full lg:w-1/4 flex flex-col items-center md:items-start">
            <h1 className="text-5xl lg:text-7xl text-center md:text-left font-tnr font-bold text-blue-900 mb-4">
              Basic <br />
              Alteration
            </h1>
            <ul className="list-none font-cambria text-blue-700  text-md lg:text-lg">
              <img
                src={el2}
                alt="el2"
                className="md:hidden w-80 my-8"
                style={{
                  boxShadow: "10px 10px 20px #616161, -10px -10px 20px #ffffff",
                }}
              />
              <li>Attach Patches</li>
              <li>Attach Denim Button</li>
              <li>Attach Label</li>
              <li className="text-black font-bold">
                Side Seam, Inseam, Crotch Seam
              </li>
              <li>Attach Button Shacks/Shirts</li>
              <li>Hand Sew, Machine Sew Laylayan</li>
              <li>Mending Needle Mark/Hole</li>
              <li>Pants Pocket Machine Sew</li>
              <li>Tucks</li>
              <li>Pabaston with Hemming Laylayan</li>
              <li>Shorten Pants Denim Back to Original</li>
              <li>Shorten Pants Denim (Ordinary)</li>
              <li>Side Seam Blouses Both sides</li>
              <li>Shorten Longsleeves/Adjust Sleeves</li>
              <li>Cuffs/Adjust Armhole</li>
              <li>Shorten Longsleeves Coat</li>
              <li>Button Hole/Button Sew</li>
              <li>Replace Garter</li>
            </ul>
          </div>
          <div className="hidden md:flex w-3/4 h-full justify-end items-center">
            <img
              src={el2}
              alt="el2"
              className="lg:w-9/12"
              style={{
                boxShadow: "10px 10px 20px #616161, -10px -10px 20px #ffffff",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[120vh] md:h-screen relative">
        <img
          src={bg3}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="absolute w-full h-screen md:px-12 lg:px-24 flex items-start pt-12">
          <div className="hidden md:flex w-3/4 h-3/4 justify-start items-center">
            <img
              src={el3}
              alt="el3"
              className="lg:w-9/12"
              style={{
                boxShadow: "10px 10px 20px #616161, -10px -10px 20px #ffffff",
              }}
            />
          </div>
          <div className="w-full lg:w-1/4 flex flex-col items-center md:items-end justify-start">
            <h1 className="text-5xl lg:text-7xl font-tnr font-bold text-blue-900 mb-4 text-center md:text-right">
              General <br />
              Alteration
            </h1>
            <ul className="list-none font-cambria text-blue-700 text-md lg:text-lg text-right">
              <img
                src={el3}
                alt="el3"
                className="md:hidden w-80 my-8"
                style={{
                  boxShadow: "10px 10px 20px #616161, -10px -10px 20px #ffffff",
                }}
              />
              <li>Resize Men's & Lady's T-shirts</li>
              <li>Resize Men's & Lady's Polo Shirts</li>
              <li>Resize Men's & Lady's Wooven Polo</li>
              <li>Resize Blouses</li>
              <li>Whole Body Repair</li>
              <li>Hand Sew, Machine Sew Laylayan</li>
              <li>Change Zipper Pants/Blouse</li>
              <li>Change Zipper Jacket</li>
              <li>Resize Denim/Slacks Pants</li>
              <li>Adjust Pants Slides</li>
              <li className="text-black font-bold">
                Change Denim/Slacks Pocket
              </li>
              <li>Adjust Waist</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
