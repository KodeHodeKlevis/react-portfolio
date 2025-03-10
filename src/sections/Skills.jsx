import React, { useEffect } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdCss } from "react-icons/md";
import { MdOutlineHtml } from "react-icons/md";
import { PiFileCSharpBold } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="skills"
      className="w-full lg:px-[200px] px-8 lg:py-[80px] py-[40px] flex lg:flex-row flex-col justify-between items-start gap-12 relative"
    >
      {/* Left Section (Text) */}
      <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
        <h1
          data-aos="zoom-in"
          className="text-2xl uppercase text-white font-poppins font-semibold"
        >
          Skills
        </h1>
        <div data-aos="zoom-in" className="bg-themered h-[5px] w-20"></div>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 text-xl"
        >
          These are the my Skills.
        </p>

        {/* Icons Section */}
        <div
          data-aos="zoom-in"
          className="flex flex-row justify-center items-start gap-4 relative z-10"
        >
          <Link to="javascript" spy={true} offset={-100} smooth={true}>
            <div className="group bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 relative">
              <RiJavascriptFill className="fill-white size-8" />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 h-1 w-0 bg-red-500 opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
            </div>
          </Link>

          <Link to="css" spy={true} offset={-100} smooth={true}>
            <div className="group bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 relative">
              <MdCss className="fill-white size-8" />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 h-1 w-0 bg-red-500 opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
            </div>
          </Link>

          <Link to="html" spy={true} offset={-100} smooth={true}>
            <div className="group bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 relative">
              <MdOutlineHtml className="fill-white size-8" />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 h-1 w-0 bg-red-500 opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
            </div>
          </Link>

          <Link to="csharp" spy={true} offset={-100} smooth={true}>
            <div className="group bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 relative">
              <PiFileCSharpBold className="fill-white size-8" />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 h-1 w-0 bg-red-500 opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
            </div>
          </Link>

          <Link to="python" spy={true} offset={-100} smooth={true}>
            <div className="group bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 relative">
              <FaPython className="fill-white size-8" />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 h-1 w-0 bg-red-500 opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
