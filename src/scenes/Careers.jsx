import React, {useRef, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bg from "../assets/CAREERS_FRANCHISE-35.jpg";
import bg2 from "../assets/CAREERS_FRANCHISE-19.jpg";
import el3 from "../assets/CAREERS_FRANCHISE-11.png";
import Button from "../components/Button";
import el2 from "../assets/CAREERS_FRANCHISE-10.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const el1Ref = useRef(null);
  
  useEffect(() => {
    const el1 = el1Ref.current;
    const imagesUp = gsap.utils.toArray(".imgUp");
    const imagesSlideRight = gsap.utils.toArray(".imgSlideRight");
    const imagesSlideLeft = gsap.utils.toArray(".imgSlideLeft");
    const fadeIn = gsap.utils.toArray(".fadeIn");

    gsap.set(el1, {
      opacity: 0,
      y: 100
    })

    gsap.set(fadeIn, { opacity: 0 });

    gsap.set(imagesUp, {
      opacity: 0,
      y: 100,
    });

    gsap.set(imagesSlideRight, {
      opacity: 0,
      x: -400,
    });

    gsap.set(imagesSlideLeft, {
      opacity: 0,
      x: 400,
    });

    gsap.set([el1], {
      opacity: 0,
      y: 100,
    });

    fadeIn.forEach((fadeIn) => {
      ScrollTrigger.create({
        trigger: fadeIn,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          gsap.to(fadeIn, {
            duration: 4,
            opacity: 1,
            delay: 0.3,
            ease: "expo",
          });
        },
        onEnterBack: () => {
          gsap.to(fadeIn, {
            duration: 2,
            delay: 0.3,
            opacity: 1,
            ease: "expo",
          });
        },
        onLeave: () => {
          gsap.set(fadeIn, { opacity: 0 });
        },
      });
    });

    imagesSlideLeft.forEach((imagesLeft) => {
      ScrollTrigger.create({
        trigger: imagesLeft,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          gsap.to(imagesLeft, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "expo",
          });
        },
        onEnterBack: () => {
          gsap.to(imagesLeft, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "expo",
          });
        },
        onLeave: () => {
          gsap.set(imagesLeft, { x: 400 });
        },
      });
    });

    imagesSlideRight.forEach((imageRight) => {
      ScrollTrigger.create({
        trigger: imageRight,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          gsap.to(imageRight, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "expo",
          });
        },
        onEnterBack: () => {
          gsap.to(imageRight, {
            duration: 2,
            opacity: 1,
            x: 0,
            ease: "expo",
          });
        },
        onLeave: () => {
          gsap.set(imageRight, { x: -400 });
        },
      });
    });

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

    gsap.to(el1, {
      opacity: 1,
      duration: 1.25,
      delay: 0.1,
      y: 0,
      ease: "expo",
      stagger: 0.1

    })
  },[]);

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
          <h1 className="text-white lg:text-blue-900 text-5xl lg:text-7xl font-bold font-tnr xl:ml-24 mb-4" ref={el1Ref}>
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
            <img src={el3} alt="el3" className="w-72 imgSlideLeft" />
            <h1 className="imgSlideRight text-6xl lg:text-7xl font-cambria font-bold text-blue-900 my-4">
              Qualification
            </h1>
          </div>
          <div className="md:w-7/12">
            <p className="imgUp font-cambria text-xl lg:text-2xl text-justify my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="imgSlideRight w-full flex justify-center md:justify-start ">
              <Button text="Apply Now" />
            </div>
          </div>
          <div className="hidden w-5/12 md:flex flex-col items-end">
            <img src={el3} alt="el3" className="imgSlideLeft w-6/12" />
            <h1 className="imgUp text-5xl lg:text-7xl font-cambria font-bold text-blue-900 my-4">
              Qualification
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full h-screen ">
        <div className="w-full h-full px-4 lg:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="w-5/12">
            <img src={el2} alt="el2" className="imgSlideRight md:w-9/12" />
          </div>
          <div className="md:w-7/12">
            <h1 className="imgUp text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4 text-center md:text-right">
              Be Part of our <br />
              Growing Partners!
            </h1>
            <p className="imgUp font-cambria text-xl lg:text-2xl my-4 text-justify md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="imgSlideLeft flex w-full justify-center md:justify-end">
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
