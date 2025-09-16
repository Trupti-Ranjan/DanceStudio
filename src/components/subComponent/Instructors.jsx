import React from "react";

const Instructors = React.forwardRef(({img, name}, ref) => {
  return (
    <div
      ref={ref}
      className="my-10 w-fit rounded-[60px] bg-white transition-all duration-400 ease-in-out md:hover:shadow-[0px_0px_100px_30px_rgba(100,_100,_111,_0.2)]"
    >
      <img
        src={img}
        alt=""
        className="w-[390px] rounded-[60px] md:w-full"
      />
      <div className="py-5 text-center md:pt-4">
        <h3 className="pb-1 text-[16px] font-semibold text-[#202536] md:text-2xl">
          {name}
        </h3>
        <p className="text-[14px] text-[#647898]">Hip Hop</p>
      </div>
    </div>
  );
});

export default Instructors;
