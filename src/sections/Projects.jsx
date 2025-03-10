import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/laptop1.jpg";
import project2 from "../assets/darklaptop.jpg";
import design from "../assets/design.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="projects"
      className="w-full lg:px-[200px] px-8 py-[60px] mt-10 flex flex-col justify-center items-center gap-5"
    >
      <h1
        data-aos="zoom-in"
        className="text-2xl uppercase text-white font-poppins font-semibold"
      >
        Projects
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="bg-themered h-[3px] w-20"
      ></div>
      <p
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-gray-300 text-lg text-center font-poppins lg:w-[70%] w-full"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quod!
      </p>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-20 mt-10">
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white font-semibold text-[32px] leading-10"
            >
              Website Developer
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="800"
              className="text-gray-300 text-[17px] font-poppins"
            >
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <Link to="/myprojects" smooth={true} duration={500} offset={-80}>
            <button
              data-aos="zoom-in"
              data-aos-delay="1000"
              className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2"
            >
              See Details
            </button>
          </Link>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="lg:w-[60%] w-full relative flex justify-center items-center"
        >
          {/* Background Box - Slightly Larger than the Image */}
          <div
            className="bg-[#2f2f2f] absolute rounded-lg 
                  lg:w-[100.5%] lg:h-[102%] w-[101%] h-[104%] 
                  top-1 left-1 lg:top-2 lg:left-2"
          ></div>

          {/* Image */}
          <img
            src={project1}
            alt="Project Image"
            className="relative z-20 rounded-lg w-full h-auto transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
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

      <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-20 mt-10">
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white font-semibold text-[32px] leading-10"
            >
              Website Developer
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="800"
              className="text-gray-300 text-[17px] font-poppins"
            >
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <Link to="/myprojects" smooth={true} duration={500} offset={-80}>
            <button
              data-aos="zoom-in"
              data-aos-delay="1000"
              className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2"
            >
              See Details
            </button>
          </Link>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="lg:w-[60%] w-full relative flex justify-center items-center"
        >
          {/* Background Box - Slightly Larger than the Image */}
          <div
            className="bg-[#2f2f2f] absolute rounded-lg 
                  lg:w-[100.5%] lg:h-[102%] w-[101%] h-[104%] 
                  top-1 left-1 lg:top-2 lg:left-2"
          ></div>

          {/* Image*/}
          <img
            src={project2}
            alt="Project Image"
            className="relative z-20 rounded-lg w-full h-auto transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
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
    </div>
  );
};

export default Projects;
