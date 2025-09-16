import React from "react";
import Facebook from "../Assets/icons/Facebook";
import Twitter from "../Assets/icons/Twitter";
import LinkedIn from "../Assets/icons/LinkedIn";
import Instagram from "../Assets/icons/Instagram";
import TopArrow from "../Assets/icons/TopArrow";
import logo from "../Assets/images/logo.webp";

const Link = ({ text }) => {
  return (
    <a
      href="#"
      className="font-mediun text-[18px] text-zinc-500 hover:text-[#FCB670]"
    >
      {text}
    </a>
  );
};

const Footer = () => {
  return (
    <section>
      <div className="px-3 py-4 md:flex md:flex-wrap md:items-start md:justify-between md:gap-8 md:px-6">
        <div className="flex flex-col gap-2 pb-10 text-[18px] font-medium text-zinc-500">
          <img src={logo} alt="Logo" className="w-28 pb-4 md:pb-1" />
          <a
            href="mailto:dreamsstudiobbsr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FCB670]"
          >
            dreamsstudiobbsr@gmail.com
          </a>
          <a
            href="tel:+918328929165"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FCB670]"
          >
            +91 83289 29165
          </a>
          <a
            href="https://www.google.com/maps/place/Dreams+Studio+BBSR/@20.3375529,85.808298,17z"
            target="_blank"
            className="hover:text-[#FCB670]"
          >
            1st Floor, Plot 12, Sai Mandir Lane, Sailashree Vihar, Bhubaneswar
          </a>
        </div>

        <div className="flex flex-col gap-2 pb-10">
          <h2 className="mb-3 text-[24px] font-semibold text-[#1E2939]">Services</h2>
          <Link text="Dancing" />
          <Link text="Hip-Hop" />
          <Link text="Jazz" />
          <Link text="Contemporary " />
          <Link text="Bollywood" />
          <Link text="Sangeet (Event/Function)" />
          <Link text="Odishi" />
        </div>

        <div className="flex flex-col gap-2 pb-10">
          <h2 className="mb-3 text-[24px] font-semibold text-[#1E2939]">Links</h2>

          <Link text="Term and Condition" />
          <Link text="FAQ’s" />
        </div>
      </div>

      <div className="md:flex md:h-[200px] md:items-center md:justify-between">
        <div className="ml-6">
          <span className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/share/1CGN6KNAah/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/dreamsstudiobbsr?igsh=MXB1eHl5YjlmNTZ1dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50"
            >
              <Instagram />
            </a>
          </span>
        </div>
        <div className="my-8">
          <a
            href="https://odiontech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium text-zinc-500 md:-ml-24"
          >
            © Copyright {new Date().getFullYear()}. Powered by Dreams Studio{" "}
            <br />
            developed by Odion Tech
          </a>
        </div>
        <div className="pb-10 text-center md:mt-8">
          <button>
            <TopArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
