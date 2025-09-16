import React from "react";
import CirclePhoto from "./CirclePhoto";

const MovingUs = ({ heading, text, circlePhoto }) => {
  return (
    <section className="w-[350px] px-4 md:my-10 md:w-[450px] md:px-0">
      <div className="relative max-w-[480px]">
        <span className="absolute -top-10 left-32 md:-top-12 md:left-42">
          <CirclePhoto imgLink={circlePhoto} />
        </span>

        <div className="relative w-full bg-white p-7 text-left md:p-12">
          <h2 className="pb-2 text-2xl font-medium md:pt-6 md:text-[26px]">
            {heading}
          </h2>
          <p className="text-zinc-500">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default MovingUs;
