import React from "react";
import { Link } from "react-router-dom";
import marker from "../assets/BRANCHES-11.png";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Details = () => {
  return (
    <>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 md:px-8 lg:px-24 flex flex-col bg-violet-100 md:flex-row items-center justify-center">
          <div className="w-1/4 h-5/6 md:flex justify-center hidden">
            <div className="h-full w-full bg-white rounded-[4rem] flex flex-col p-4">
              <div className="h-1/4 border-b border-gray-400 p-4">
                <h1 className="text-3xl text-blue-900 font-cambria font-bold">
                  Address
                </h1>
              </div>
              <div className="h-1/4 border-b border-gray-400 p-4">
                <h1 className="text-3xl text-blue-900 font-cambria font-bold">
                  Mall Hours
                </h1>
              </div>
              <div className="h-1/4 border-b border-gray-400 p-4">
                <h1 className="text-3xl text-blue-900 font-cambria font-bold">
                  Contact Us
                </h1>
              </div>
              <div className="h-1/4 p-4">
                <h1 className="text-3xl text-blue-900 font-cambria font-bold">
                  Social Media
                </h1>
              </div>
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col items-start">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.735881886682!2d120.99572907481706!3d14.44237888602547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d13dedb44009%3A0x6dbc2b1228bf9831!2sRobinsons%20Las%20Pi%C3%B1as!5e0!3m2!1sen!2sph!4v1693020504734!5m2!1sen!2sph&amp;
            markers=icon:${marker}|14.44237888602547,120.99572907481706`}
              title="Robinsons Las Piñas Location"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full p-4"
            ></iframe>
            <div className="w-full flex justify-end px-4">
              <Link to="/branches" onClick={() => window.scrollTo(0, 0)}>
                <Button text="Back to Branches" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Details;
