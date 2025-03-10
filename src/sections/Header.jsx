import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuLink = [
    { name: "Home", to: "hero", type: "scroll" },
    { name: "Skills", to: "skills", type: "scroll" },
    { name: "Projects", to: "projects", type: "scroll" },
    { name: "Contacts", to: "cta", type: "scroll" },
    { name: "About", to: "/about", type: "route" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  //  Handle scrolling for home page sections
  const handleScroll = (to) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${to}`; // Redirects to Home and scrolls
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -80, // Prevents navbar from covering section
      });
    }
    setMenuOpen(false); // Closes mobile menu
  };

  return (
    <header className="bg-themeblack py-4 lg:px-[100px] px-7 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="https://www.ask-oracle.com/baby-name/klevis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-themered font-bold text-xl">
            KLEVIS<span className="text-white">.</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-poppins text-white">
            {menuLink.map((link) => (
              <li key={link.to}>
                {link.type === "route" ? (
                  <Link
                    to={link.to}
                    className="cursor-pointer hover:text-themered transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer hover:text-themered transition-colors"
                    onClick={() => handleScroll(link.to)}
                  >
                    {link.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-themeblack bg-opacity-95 flex flex-col items-center justify-center 
        space-y-8 text-lg font-poppins text-white transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-7 text-3xl text-white"
          onClick={() => setMenuOpen(false)}
        >
          <IoCloseSharp />
        </button>

        {/* Mobile Navigation Links */}
        {menuLink.map((link) => (
          <li key={link.to}>
            {link.type === "route" ? (
              <Link
                to={link.to}
                className="cursor-pointer hover:text-themered transition-colors text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-themered transition-colors text-2xl"
                onClick={() => handleScroll(link.to)}
              >
                {link.name}
              </ScrollLink>
            )}
          </li>
        ))}
      </div>
    </header>
  );
};

export default Header;
