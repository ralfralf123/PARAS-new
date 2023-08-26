import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bg from "../assets/contact-25.jpg";
import Button from "../components/Button";
import el1 from "../assets/contact-09.png";

const Contact = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <NavBar />
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover h-screen w-full"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full items-center justify-center pt-80">
          <h1 className="text-white text-center text-5xl lg:text-7xl font-bold font-tnr mb-4">
            We'd love to hear from you!
          </h1>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col">
        <div className="inset-0 flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-bold font-tnr mb-4 text-center">
            Questions? Comments? and Suggestion? <br />
            Please complete the form below <br /> and click submit
          </h1>
          <form className="flex flex-col w-full md:w-5/6 lg:w-3/4 items-center justify-center lg:px-32 translate-y-4">
            <input
              type="text"
              name="name"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900 text-white"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900 text-white"
              placeholder="Email"
            />
            <textarea
              type="text"
              name="message"
              className="h-28 p-2 md:p-2 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900 text-white"
              placeholder="Message"
            />
            <Button text="Submit" />
          </form>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col">
        <div className="inset-0 flex flex-col w-full h-full justify-center items-center">
          <img src={el1} alt="el1" className="lg:w-9/12" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
