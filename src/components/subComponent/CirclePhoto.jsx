import React from "react";

const CirclePhoto = ({ imgLink }) => {
  return (
    <div>
      <img
        src={imgLink}
        alt="Image"
        className="w-[70px] md:w-[100px] rounded-full border-4 border-white"
      />
    </div>
  );
};

export default CirclePhoto;
