import React, { useRef } from "react";
import Instructors from "./subComponent/Instructors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NormalButton from "./subComponent/NormalButton";

gsap.registerPlugin(ScrollTrigger);

const BestInstructors = () => {
  const headingRef = useRef();
  const cardsRef = useRef(); // Wrap all cards

  useGSAP(() => {
    
    gsap.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
      },
    });

    const cards = cardsRef.current.children;

    gsap.from(cards[0], {
      x: -250,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });

    gsap.from(cards[1], {
      y: -250,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });

    gsap.from(cards[2], {
      y: 250,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });

    gsap.from(cards[3], {
      x: 250,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="overflow-hidden py-20">
      <h1
        ref={headingRef}
        className="my-10 text-center text-4xl font-semibold md:text-8xl"
      >
        Best Instructors
      </h1>

      <div ref={cardsRef} className="md:flex md:justify-between gap-4">
        <div>
          <Instructors
            img="https://live.templately.com/wp-content/uploads/2021/03/6a62ad15-image-15.jpg"
            name="Bobbi Jackson"
          />
        </div>
        <div className="md:mt-24">
          <Instructors
            img="https://live.templately.com/wp-content/uploads/2021/03/b968dcc0-image-16.jpg"
            name="Barbara Cotilla"
          />
        </div>
        <div>
          <Instructors
            img="https://live.templately.com/wp-content/uploads/2021/03/8cd96054-image-17.jpg"
            name="Adem Smith"
          />
        </div>
        <div className="md:mt-24">
          <Instructors
            img="https://live.templately.com/wp-content/uploads/2021/03/e63243c8-image-18.jpg"
            name="Marcus Stoinis"
          />
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <NormalButton text="Contact Us" />
      </div>
    </section>
  );
};

export default BestInstructors;
