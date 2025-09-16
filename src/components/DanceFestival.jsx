import React, { useRef } from "react";
import DanceFestivalCard from "./subComponent/DanceFestivalCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DanceFestival = () => {
  const data = [
    {
      date: 23,
      month: "May",
      heading: "Contemporary Dance Festival",
      place: "California, US State",
      image:
        "https://live.templately.com/wp-content/uploads/2021/03/64af257b-image-7.jpg",
    },
    {
      date: 15,
      month: "May",
      heading: "Contemporary Dance Festival",
      place: "California, US State",
      image:
        "https://live.templately.com/wp-content/uploads/2021/03/49a59421-image-8.jpg",
    },
    {
      date: 14,
      month: "May",
      heading: "Contemporary Dance Festival",
      place: "California, US State",
      image:
        "https://live.templately.com/wp-content/uploads/2021/03/2b2d59f9-image-9.jpg",
    },
  ];

  const heading = useRef();
  const leftCard = useRef();
  const middleCard = useRef();
  const rightCard = useRef();

  useGSAP(() => {
    gsap.from(heading.current, {
      y: 200,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: heading.current,
        start: "top 90%",
      },
    });

    
    gsap.from(leftCard.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: leftCard.current,
        start: "top 75%",
      },
    });


    gsap.from(middleCard.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: middleCard.current,
        start: "top 85%",
      },
    });

    
    gsap.from(rightCard.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: rightCard.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section className="my-36 flex flex-col items-center justify-center">
      <h1
        ref={heading}
        className="pb-6 text-center text-4xl font-semibold text-zinc-800 md:pb-8 md:text-8xl"
      >
        Dance Festival 2025
      </h1>

      <div className="flex flex-wrap justify-between gap-12">
        <div ref={leftCard}>
          <DanceFestivalCard {...data[0]} />
        </div>
        <div ref={middleCard}>
          <DanceFestivalCard {...data[1]} />
        </div>
        <div ref={rightCard}>
          <DanceFestivalCard {...data[2]} />
        </div>
      </div>
    </section>
  );
};

export default DanceFestival;
