import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  // Fetch API key from environment variables
  const API_ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY;

  // State to store form submission result
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", API_ACCESS_KEY); // ✅ Use secure environment variable

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Request Sent!",
          icon: "success",
          draggable: true,
        });
        event.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Failed to send the form!",
      });
    }
  };

  return (
    <div
      id="cta"
      className="w-full lg:px-[200px] px-8 py-[60px] flex flex-col items-center gap-5"
    >
      <div
        data-aos="zoom-in"
        className="w-full bg-[#2f2f2f] flex lg:flex-row flex-col justify-between items-center lg:p-16 p-6 rounded-lg"
      >
        <h1 className="text-white lg:w-[50%] w-full lg:text-[28px] text-[24px] leading-8 lg:text-left text-center font-semibold">
          Check the links below!
        </h1>

        {/* Contact Form */}
        <section className="w-full flex justify-center items-center bg-themeblack px-4 py-6">
          <div className="w-full max-w-md bg-black shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Contact Form
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-themered focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-themered focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-white font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="p-2 bg-gray-700 text-white rounded-md h-24 focus:ring-2 focus:ring-themered focus:outline-none resize-none"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-themered text-white py-2 rounded-md font-medium text-base hover:bg-white hover:text-themered transition-all duration-300"
              >
                Send Request
              </button>
            </form>

            {/* Submission Result Message */}
            {result && <p className="text-center text-white mt-4">{result}</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cta;
