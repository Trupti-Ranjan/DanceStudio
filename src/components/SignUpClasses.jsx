import React, { useRef } from "react";
import VideoPopup from "./subComponent/VideoPopup";
import RightArow from "../Assets/icons/RightArow";
import NormalButton from "./subComponent/NormalButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SignUpClasses = () => {
  let value = [
    "Personalized Dance Class Schedules",
    "Chance To Perform On Broadway",
    "Attend Annual Dance Festivals",
  ];

  const left = useRef();
  const right = useRef();

  useGSAP(() => {
    gsap.from(left.current, {
      x: -1300,
      duration: 1,
      scrollTrigger: {
        trigger: left.current,
        start: "top 120%",
      },
    });

    gsap.from(right.current, {
      x: 1300,
      duration: 1,
      scrollTrigger: {
        trigger: right.current,
        start: "top 120%",
      },
    });
  });
  return (
    <section
      id="signup"
      className="overflow-hidden pt-28 md:flex md:gap-20 md:pt-60 md:pb-32"
    >
      <div className="md:basis-[50%]" ref={left}>
        <h1 className="text-4xl font-semibold md:-mt-32 md:text-8xl">
          Sign up for{" "}
        </h1>
        <h1 className="mt-4 text-4xl font-semibold md:text-8xl">Classes</h1>
        <div className="py-16 md:mt-20">
          <VideoPopup />
        </div>
      </div>

      <div className="md:basis-[50%]" ref={right}>
        <p className="text-[18px] text-zinc-500 md:text-[20px]">
          Train under the best dance choreographers. Sign up for dance lessons
          only at Dance Studio and learn different dance styles from all over
          the world like tango, waltz, hiphop, ballet and more.
        </p>
        <div className="my-6 md:my-20">
          {value.map((items, index) => (
            <div key={index} className="my-3 flex items-center gap-6 md:gap-12">
              <RightArow />
              <p className="font-medium md:py-1 md:text-[20px]">{items}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <img
            src="https://live.templately.com/wp-content/uploads/2021/03/e1a18738-arrow-1-1.png"
            alt=""
            className="mb-7 w-[70px] md:absolute md:-top-20 md:-left-40 md:w-[120px]"
          />
          <NormalButton text="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default SignUpClasses;
