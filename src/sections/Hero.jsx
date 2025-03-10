import React, { useEffect } from "react";
import { Link } from "react-scroll";
import hero from "../assets/head.jpg";
import design from "../assets/design.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="hero"
      className="w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] min-h-[90vh] lg:min-h-screen flex lg:flex-row flex-col justify-between items-center gap-[50px]"
    >
      {/* Left Section */}
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-6">
        <h1
          data-aos="zoom-in"
          className="text-red-600 lg:text-4xl text-2xl font-semibold font-poppins"
        >
          Hello, My name is Klevis!
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white text-4xl font-semibold font-poppins"
        >
          A Full Stack Developer
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 lg:text-xl text-base font-poppins"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quis
          vero natus atque facilis dolore repellendus sed perspiciatis!
          Recusandae.
        </p>
        <Link to="cta" spy={true} offset={-100} smooth={true}>
          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            className="bg-themered hover:bg-white text-white hover:text-red-600 font-semibold text-sm px-6 py-2 rounded-lg mt-3 font-poppins"
          >
            Contact Me
          </button>
        </Link>
      </div>

      {/* Right Section (Hero Image) */}
      <div
        className="lg:w-1/2 w-full relative flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        {/* Background Box - Slightly Larger than Image */}
        <div
          className="bg-[#2f2f2f] absolute rounded-lg 
                  lg:w-[100.5%] lg:h-[560px] w-[100%] h-[102%] 
                  top-2 left-2"
        ></div>

        {/* Hero Image - Fits Inside Background */}
        <img
          src={hero}
          alt="hero image"
          className="lg:w-[680px] w-full lg:h-[550px] h-auto rounded-lg relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
         hover:scale-105 origin-center"
        />

        {/* Decorative Design Image */}
        <img
          src={design}
          alt="design"
          className="absolute -top-4 -right-3 rounded-lg z-0 transition-transform duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
     hover:rotate-180 hover:scale-105 origin-center"
        />
      </div>
    </div>
  );
};

export default Hero;
