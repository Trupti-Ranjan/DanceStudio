import React from "react";
import NormalButton from "./subComponent/NormalButton";
import CirclePhoto from "./subComponent/CirclePhoto";
import VideoPopup from "./subComponent/VideoPopup";
import arrow from "../Assets/images/arrow-1-1.webp";
import model from "../Assets/images/model-hero.webp"
import model1 from "../Assets/images/model1.webp"

const Hero = () => {
  return (
    <section className="pt-20 md:pt-12">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="relative flex flex-col items-start gap-2">
          <h1 className="text-[100px] leading-none font-bold md:text-[120px]">
            Best <br /> Dance Studio
          </h1>
          <img
            src={arrow}
            alt="image"
            className="h-16 w-16 md:absolute md:top-[365px] md:-left-[130px] md:h-28 md:w-28"
          />
          <a href="#signup" className="md:mt-24">
            <NormalButton text="Join Now" />
          </a>
        </div>
        <div className="relative mt-10">
          <img
            src={model}
            alt="image"
            className="h-full w-full"
          />
          <span className="absolute top-[230px] -right-6 md:top-[270px] md:-right-10">
            <CirclePhoto imgLink={model1} />
          </span>
          <span className="absolute bottom-40 -left-5 md:bottom-56 md:-left-24">
            <VideoPopup />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
