import React from "react";

const Link = ({  color, href, Link }) => {
  return (
    <div>
      <a href={href} className={`text-xl font-normal ${color} hover:text-[#F56A6A] transition-all duration-100 ease-in-out`}>{Link}</a>
    </div>
  );
};

export default Link;
