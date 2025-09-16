import React, { useRef } from "react";
import MovingUs from "./subComponent/MovingUs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import hero2model from "../Assets/images/hero2model.webp";
import base from "../Assets/images/base.svg";

const Hero3 = () => {
  const leftCard = useRef();
  const rightCard = useRef();

  useGSAP(() => {
    gsap.from(leftCard.current, {
      scale: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: leftCard.current,
        start: "top 130%",
      },
    });

    gsap.from(rightCard.current, {
      x: 1000,
      duration: 1.2,
      scrollTrigger: {
        trigger: leftCard.current,
        start: "top 130%",
      },
    });
  });
  return (
    <section id="About" className="overflow-hidden md:flex md:justify-between">
      <div
        ref={leftCard}
        className="my-20 flex w-full items-center justify-center md:relative md:basis-[45%]"
      >
        <div className="relative h-[300px] w-[300px] md:absolute md:top-[100px] md:-left-[0px] md:h-[400px] md:w-[400px]">
          <img
            src={hero2model}
            alt="hero2model"
            loading="lazy"
            className="absolute z-[1] h-auto w-full"
          />
          <img
            src={base}
            alt=""
            className="absolute top-72 h-auto w-full opacity-20 md:top-[350px] md:left-20 md:w-[70%]"
          />
        </div>
      </div>

      <div ref={rightCard} className="md:flex md:basis-[55%] md:flex-col">
        <div className="mt-[400px] text-center sm:mt-10">
          <h1 className="mb-20 text-4xl font-semibold md:text-8xl">
            Get Moving With Us
          </h1>
          <span>
            <MovingUs
              circlePhoto="https://live.templately.com/wp-content/uploads/2023/01/8ce2eb39-icon-1.png"
              heading="Join Our Class"
              text="earn from the best dance choreographers. Sign up for our dance lessons today."
            />
          </span>
        </div>
        <div className="mt-24 flex justify-end text-center sm:mt-10">
          <span className="relative">
            <img
              src="https://live.templately.com/wp-content/uploads/2021/03/321e49f7-arrow-2-1.png"
              alt=""
              className="absolute -top-20 right-1 w-[60px] md:w-[105px]"
            />
            <MovingUs
              circlePhoto="https://live.templately.com/wp-content/uploads/2023/01/b7b37aac-icon-2.png"
              heading="Dance Choreography"
              text="Follow our dance choreography videos to learn different dance styles."
            />
            <img
              src="https://live.templately.com/wp-content/uploads/2021/03/6a8f0daa-arrow-2-1.png"
              alt=""
              className="absolute -bottom-20 left-5 w-[60px] md:-bottom-16 md:-left-28 md:w-[105px]"
            />
          </span>
        </div>
        <div className="mt-24 flex justify-start text-center sm:mt-10">
          <span>
            <MovingUs
              circlePhoto="https://live.templately.com/wp-content/uploads/2023/01/4cd7f27c-icon-3.png"
              heading="Perform Onstage"
              text="Perform onstage at our annual dance festival and get a chance to garner worldwide recognition."
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
