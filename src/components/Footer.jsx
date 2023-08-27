import React from "react";
import img1 from "../assets/ELEMENTS-18.png";
import img2 from "../assets/ELEMENTS-17.png";
import img3 from "../assets/ELEMENTS-16.png";
import logo2 from "../assets/WEB LOGO WHITE.png";
import logo3 from "../assets/contact-08.png";
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
          <div className="w-full md:w-1/2 flex flex-col items-center lg:items-end">
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
          <div className="w-full md:w-1/2 flex items-center lg:justify-start justify-center h-full">
            <textarea
              type="text"
              name="message"
              className="h-28 p-2 md:p-2 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-white text-white"
              placeholder="Message"
            />
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
          <img src={logo2} alt="logo2" className="w-24 lg:w-80" />
          <img src={logo3} alt="logo3" className="w-24 lg:w-80" />
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
