import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      id="context"
      className=" bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5 "
    >
      <h1
        data-aos="zoom-in"
        className=" capitalize text-white text-[25px] font-semibold font-poppins "
      >
        Get in touch.
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className=" text-gray-300 text-[16px] text-center font-poppins leading-8 "
      >
        {" "}
        <br></br> contactme@gmail.com <br></br> +4799072107
      </p>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        id="social-icons"
        className=" w-full flex justify-center items-center gap-3 mt-6 "
      >
        <div className=" bg-[#2f2f2f] hover:bg-themered rounded-full p-3 ">
          <FaInstagram className="fill-white size-6" />
        </div>
        <div className=" bg-[#2f2f2f] hover:bg-themered rounded-full p-3 ">
          <FaLinkedin className="fill-white size-6" />
        </div>
        <div className=" bg-[#2f2f2f] hover:bg-themered rounded-full p-3 ">
          <FaGithub className="fill-white size-6" />
        </div>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" bg-[#2f2f2f] hover:bg-themered rounded-full p-3 ">
            <FaYoutube className="fill-white size-6" />
          </div>
        </a>
      </div>
      <p className="text-gray-300 text-[15px] text-center font-poppins ">
        Copyright 2025, Klevis, All Rights Reserved.
      </p>
      <div
        id="icon-box"
        className=" bg-themered text-white p-3 rounded-full hover:bg-black hover:text-themered cursor-pointer fixed bottom-7 right-7 "
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className=" size-4 " />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
