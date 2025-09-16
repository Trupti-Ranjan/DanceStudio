import React from "react";

const NormalButton = ({ text }) => {
  return (
    <div className="">
      <button
        className={`flex w-auto items-center justify-center rounded-[18px] bg-[#FCB670] px-6 py-3 text-[14px] font-medium text-[#202536] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#202536] hover:text-white active:scale-95  sm:w-[300px] md:w-auto md:px-7 md:py-4.5 md:text-xl`}
      >
        {text}
      </button>
    </div>
  );
};

export default NormalButton;
