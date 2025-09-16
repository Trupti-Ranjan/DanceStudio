import * as React from "react";
const RightArow = (props) => (
  <svg
    fill="#000000"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    id="curve-arrow-right"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <path
      id="secondary"
      d="M13,4l7.63,6.23a1,1,0,0,1,0,1.54L13,18V14c-6.12.28-10,6-10,6C3,14.13,5.9,8.28,13,8Z"
      style={{
        fill: "rgb(256, 256, 256)",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary"
      d="M13,4l7.63,6.23a1,1,0,0,1,0,1.54L13,18V14c-6.12.28-10,6-10,6C3,14.13,5.9,8.28,13,8Z"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default RightArow;