import React from "react";
import img1 from "../assets/ELEMENTS-18.png";
import img2 from "../assets/ELEMENTS-17.png";
import img3 from "../assets/ELEMENTS-16.png";
import logo2 from "../assets/PAS Logo - White Blue R (Medium).png";
import logo3 from "../assets/Parush White.png";
import logo4 from "../assets/Bespoke.png";
import logo5 from "../assets/F&F Logo - Clear_Colored(1).png";
import fb from "../assets/ELEMENTS-19.png";
import ig from "../assets/ELEMENTS-20.png";

const Footer = () => {
  return (
    <section className="w-full h-auto bg-black flex flex-col items-center">
      <h1 className="font-cambria text-white text-5xl font-bold m-8 translate-y-4">
        Get in touch!
      </h1>
      <form className="flex flex-col w-full items-center justify-center lg:px-32 translate-y-4">
        <div className="flex flex-col md:flex-row w-full items-center">
          <div className="font-cambria w-full md:w-1/2 flex flex-col items-center lg:items-end">
            <input
              type="text"
              name="name"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-white text-white"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-white text-white"
              placeholder="Email"
            />
          </div>
          <div className="w-full md:w-1/2 flex lg:justify-start justify-center h-full">
            <div className="h-28 p-2 m-2 w-11/12 md:w-9/12 border-2 rounded-xl border-white">
              <select
                name="concern"
                className="font-cambria text-lg w-full border-none text-gray-400 bg-black"
              >
                <option value="" disabled selected hidden>
                  Concern
                </option>
                <option value="Franchise" className="text-white">Franchise</option>
               <option value="Job Application"  className="text-white">Job Application</option>
                <option value="Store Concerns"  className="text-white">Store Concerns</option>
               <option value="Other Concerns"  className="text-white">Other Concerns</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className="rounded-lg bg-white my-4 px-6 py-1 text-blue-900">
            Submit
          </button>
        </div>
      </form>
      <div className="w-full h-auto grid grid-cols-3 mt-16 px-4 md:px-12 pb-8">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white font-cambria text-md md:text-lg lg:text-2xl">
            Official Member of:
          </h2>
          <img src={img1} alt="img1" className="w-24 lg:w-48" />
          <img src={img2} alt="img2" className="w-14 lg:w-28" />
          <img src={img3} alt="img3" className="w-16 lg:w-32" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={logo2} alt="logo2" className="w-24 lg:w-72 mb-5" />
          <h2 className="font-cambria text-white text-3xl">Our Brands</h2>
          <div className="w-full flex gap-2 justify-center">
            <img src={logo4} alt="logo3" className="w-24 lg:w-40" />
            <img src={logo3} alt="logo3" className="w-24 lg:w-40" />
            <img src={logo5} alt="logo3" className="w-24 lg:w-40" />
          </div>
          
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex justify-end">
            <img
              src={fb}
              alt="fb"
              className="w-10 md:w-20 lg:mx-2 cursor-pointer"
              onClick={() =>
                window.open("https://www.facebook.com/ParasAlterStation/", "_blank")
              }
            />
            <img
              src={ig}
              alt="ig"
              className="w-10 md:w-20 cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/ParasAlterStation/", "_blank")
              }
            />
          </div>
          <h2 className="font-cambria text-white text-xs lg:text-xl text-right">
            Terms and Conditions
          </h2>
          <h2 className="font-cambria text-white text-xs lg:text-xl">
            Public Notice
          </h2>
          <p className="font-cambria text-white text-[0.4rem] lg:text-xs mt-6 text-right">
            Copyright 2009-2019. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
