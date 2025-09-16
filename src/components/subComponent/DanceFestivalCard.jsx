import React from "react";
import Location from "../../Assets/icons/Location";

const DanceFestivalCard = ({ date, month, heading, place, image }) => {
  return (
    <div className="mt-10 w-full rounded-[56px] bg-white px-5 pt-3 pb-7 shadow-md md:w-[330px] md:rounded-[40px] md:p-2.5">
      <div className="relative">
        <img src={image} alt="Dance" className="rounded-[35px] object-cover " />
        <div className="absolute top-0 right-0 rounded-[12px] rounded-tr-[30px] border-2 border-[#e7ddf6] bg-white/30 p-4 text-center text-xs leading-tight font-semibold text-white backdrop-blur-md md:rounded-[25px] md:rounded-tr-[30px]">
          <p className="text-[16px] leading-none">{date}</p>
          <p className="text-[16px]">{month}</p>
        </div>
      </div>

      <div className="mt-4 pl-3 md:px-9">
        <h3 className="pb-3 text-[18px] font-semibold text-[#202536] md:pb-0 md:text-2xl">
          {heading}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-sm text-zinc-500 md:pt-5 md:pb-7 md:text-[15px] md:font-medium">
          <Location />
          <span>{place}</span>
        </div>
      </div>
    </div>
  );
};

export default DanceFestivalCard;
