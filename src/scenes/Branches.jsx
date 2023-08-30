import React, {useRef, useEffect} from "react";
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
import { IoIosSearch } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Branches = () => {
  gsap.registerPlugin(ScrollTrigger);

  const el1Ref = useRef(null);
  const el2Ref = useRef(null);

  useEffect(() => {
    const el1 = el1Ref.current;
    const el2 = el2Ref.current;
    const imagesUp = gsap.utils.toArray(".imgUp");

    gsap.set([el1, el2, imagesUp], {
      opacity: 0,
      y: 100
    })

    imagesUp.forEach((imgUp) => {
      ScrollTrigger.create({
        trigger: imgUp,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          gsap.to(imgUp, {
            opacity: 1,
            duration: 2,
            delay: 0.2,
            y: 0,
            ease: "expo",
          });
        },
        onEnterBack: () => {
          gsap.to(imgUp, {
            opacity: 1,
            duration: 2,
            y: 0,
            delay: 0.2,
            ease: "expo",
          });
        },
        onLeave: () => {
          gsap.set(imgUp, { opacity: 0, y: 100 });
        },
      });
    });

    gsap.to([el1, el2], {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      y: 0,
      ease: "expo",
      stagger: 0.1

    })
  },[]);

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
          <h1 className="text-white text-2xl lg:text-4xl font-bold font-tnr mb-4 text-center md:w-5/6" ref={el1Ref}>
            Welcome to the Paras Alter Station Branch Directory where you can
            view maps, and check available stores and services at different
            malls nationwide!
          </h1>
          <div className="relative w-72 lg:w-96 h-12 flex" ref={el2Ref}>
            <input
              type="text"
              className="w-full h-full rounded-3xl bg-gray-300 opacity-60 pl-2 "
              id="search-form"
            ></input>
            <IoIosSearch size={30} className="text-blue-900 absolute right-[3%] top-[20%] cursor-pointer"/>
          </div>         
        </div>
      </section>
      <section className="w-full h-auto flex flex-col bg-slate-300 justify-center items-center">
        <div className="imgUp grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 lg:m-24">
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
          <Link to="/details" onClick={() => window.scrollTo(0, 0)}> 
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
