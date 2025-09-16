import * as React from "react";
const PlayButton = (props) => (
  <svg
    fill="#ffffff"
    width="70px"
    height="70px"
    viewBox="0 0 24 24"
    id="play"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <polygon
      id="secondary"
      points="16 12 10 16 10 8 16 12"
      style={{
        fill: "none",
        stroke: "rgb(256, 256, 256)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1,
      }}
    />
    <circle
      id="primary"
      cx={12}
      cy={12}
      r={9}
      style={{
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1,
      }}
    />
  </svg>
);
export default PlayButton;