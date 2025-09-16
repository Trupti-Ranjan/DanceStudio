import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import PlayButton from "../../Assets/icons/PlayButton";
import gsap from "gsap";
import videophoto from "../../Assets/images/videophoto.webp"

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // const opts = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { scale: 0 },
      { scale: 1, duration: 2.5, ease: "back.out(1)" },
    );
  }, []);

  return (
    <div
      ref={popupRef}
      className="relative h-[100px] w-[170px] cursor-pointer pl-2 md:h-[168px] md:w-[300px]"
      onClick={openPopup}
    >
      {/* Image */}
      <img
        src={videophoto}
        alt="Click to open video"
        className="h-full w-full rounded-[90px] object-cover shadow-lg"
      />

      {/* Play Button */}
      {/* <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <PlayButton />
      </span> */}

      {/* Modal */}
      {/* {isOpen && (
          <div className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative max-w-[90%] rounded-lg bg-white p-4 shadow-lg">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-2xl font-bold text-black"
              >
                &times;
              </button>
              <YouTube videoId="61EGpAy4Ids" opts={opts} />
            </div>
          </div>
        )} */}
    </div>
  );
};

export default VideoPopup;
