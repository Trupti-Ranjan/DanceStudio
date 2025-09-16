import React, { useState } from "react";
import logo from "../Assets/images/logo.webp";
import Link from "./subComponent/Link";
import Button from "./subComponent/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About", "Gallery", "Testimonials"];
  return (
    <nav className="flex flex-col py-4 md:flex-row md:items-center md:justify-between md:py-12">
      {/* Desktop */}
      <div className="flex items-center justify-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="h-17 w-auto object-contain md:h-32 md:w-auto"
        />
        <h1 className="text-3xl font-semibold text-[#202536]">Dreams Studio</h1>
      </div>

      <div className="relative flex items-center justify-end gap-10">
        <div className="hidden gap-16 md:flex">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              color="text-[#202536]"
              href={`#${item}`}
              Link={item}
            />
          ))}
        </div>
        <span className="absolute top-6 md:static">
          <a href="#contactus">
            <Button text="Contact Us" />
          </a>
        </span>
      </div>

      {/* Mobile */}
      <button
        className={`absolute top-30 transition-transform duration-300 md:hidden ${
          menuOpen ? "rotate-90" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Drop Down */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "mt-24 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-5">
          {navLinks.map((item, index) => (
            <a
              key={index}
              className="rounded-md bg-[#202536] px-2 py-3 text-center"
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
            >
              <Link color="text-white" Link={item} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
