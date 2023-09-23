import "./timeline.css";
import { useEffect, useState } from "react";
import src from "../images/timeline-desktop.png";
import srct from "../images/timeline-mobile.png";

const Timeline = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="timeline" id="timeline">
      <h1>Timeline</h1>
      <p>
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <img
        src={width > breakpoint ? src : srct}
        alt=""
        height={width > breakpoint ? 900 : 800}
      />
    </div>
  );
};

export default Timeline;
