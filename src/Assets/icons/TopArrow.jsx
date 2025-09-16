import * as React from "react";

const TopArrow = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className="group flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-xl bg-white p-2 transition-all duration-300 hover:bg-[#FCB670]"
    >
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        {...props}
      >
        <path
          d="m256 34 176 176-21.2 21.21L271 91.4V478h-30V91.4L101.16 231.25 80 210Z"
          className="fill-[#FCB670] stroke-[#FCB670] stroke-[20] transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
        />
      </svg>
    </div>
  );
};

export default TopArrow;
