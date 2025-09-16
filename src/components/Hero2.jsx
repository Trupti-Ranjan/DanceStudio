import React, { useRef } from "react";
import YoutubeCard from "./subComponent/YoutubeCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const cardLeftRef = useRef(null);
  const cardRightRef = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo(
      cardLeftRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardLeftRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    
    gsap.fromTo(
      cardRightRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="my-20 gap-4 md:flex md:justify-between overflow-hidden">
      <YoutubeCard
        ref={cardLeftRef}
        date="Feb 21, 2021"
        heading="Basic Dance step for everyone"
        views="5,510,936 views"
        image="https://live.templately.com/wp-content/uploads/2021/03/2a65f1a9-image-3.jpg"
      />
      <YoutubeCard
        ref={cardRightRef}
        date="Mar 3, 2021"
        heading="3 Simple Dance Moves for Beginners"
        views="5,510,936 views"
        image="https://live.templately.com/wp-content/uploads/2021/03/ecf263f6-image-4.jpg"
      />
    </div>
  );
};

export default Hero2;
