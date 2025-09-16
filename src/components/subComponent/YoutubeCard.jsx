import React from "react";
import YoutubeLogo from "../../Assets/icons/YoutubeLogo";

const YoutubeCard = React.forwardRef(({ date, heading, views, image }, ref) => {
  return (
    <div className="mt-4" ref={ref}>
      <div className="flex sm:flex-row items-center sm:items-start bg-white gap-4 sm:gap-10 p-3 rounded-[62px] w-full max-w-[605px] md:w-[550px] md:justify-betweeen md:items-center">
        <img
          src={image}
          alt=""
          className="md:w-[200px] rounded-[50px] w-[135px]"
        />
        <div className="w-[180px]">
          <p className="text-sm text-zinc-400">{date}</p>
          <h3 className="text-xl md:text-2xl text-[#202536] font-medium leading-snug pt-1 pb-1.5 md:w-[300px]">
            {heading}
          </h3>
          <div className="flex justify-start sm:justify-start items-center gap-2 mt-1 text-zinc-400">
            <YoutubeLogo />
            <span className="text-sm">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default YoutubeCard;
