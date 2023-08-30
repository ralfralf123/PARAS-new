import React, {useRef, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bg from "../assets/contact-25.jpg";
import Button from "../components/Button";
import el1 from "../assets/contact-09.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const el1Ref = useRef(null);
  
  useEffect(() => {
    const el1 = el1Ref.current;
    const imagesDown = gsap.utils.toArray(".imgDown");
    const imagesSlideRight = gsap.utils.toArray(".imgSlideRight");
    const imagesUp = gsap.utils.toArray(".imgUp");
    
    gsap.set(imagesUp, {
      opacity: 0,
      y: 100,
    });

    gsap.set(imagesDown, {
      opacity: 0,
      y: -100
    })

    gsap.set(imagesSlideRight, {
      opacity: 0,
      x: -400,
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

    imagesDown.forEach((imgUp) => {
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
    gsap.set(el1, {
      opacity: 0,
      y: 100
    })

    gsap.to(el1, {
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
        <div className="absolute inset-0 flex flex-col w-full h-full items-center justify-center pt-80" ref={el1Ref}>
          <h1 className="text-white text-center text-4xl lg:text-7xl font-bold font-tnr mb-4 px-8 md:px-0">
            We'd love to hear from you!
          </h1>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col">
        <div className="inset-0 flex flex-col w-full h-full justify-center items-center px-8 md:px-0">
          <h1 className="imgDown text-blue-900 text-2xl md:text-3xl lg:text-4xl font-bold font-tnr mb-4 text-center">
            Questions? Comments? and Suggestion? <br />
            Please complete the form below <br /> and click submit
          </h1>
          <form className="imgUp font-cambria flex flex-col w-full md:w-5/6 lg:w-3/4 items-center justify-center lg:px-32 translate-y-4">
            <input
              type="text"
              name="name"
              className=" p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900"
              placeholder="Email"
            />
            <textarea
              type="text"
              name="message"
              className="h-28 p-2 md:p-2 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900"
              placeholder="Message"
            />
            <Button text="Submit" />
          </form>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col">
        <div className="inset-0 flex flex-col w-full h-full justify-center items-center">
          <img src={el1} alt="el1" className="imgSlideRight lg:w-9/12" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
