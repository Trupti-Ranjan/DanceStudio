import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button
        className={`
          text-base md:text-xl
          px-5 md:px-7
          py-3 md:py-4
          rounded-[16px] md:rounded-[18px]
          font-medium
          text-[#202536] border border-[#202536]
          hover:bg-[#202536] hover:text-white
          transition-all duration-300 ease-in-out
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
