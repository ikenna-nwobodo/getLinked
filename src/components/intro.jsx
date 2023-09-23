import "./intro.css";
import { useEffect, useState } from "react";

const Intro = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="intro" id="intro">
      <div className="intro-img">
        <img
          src={require("../images/intropic.png")}
          alt=""
          height={width > breakpoint ? 500 : 250}
        />
      </div>
      <div className="intro-text">
        <div className="title">
          <h1>
            Introduction to getlinked <br></br> <span>tech Hackathon 1.0</span>{" "}
          </h1>
        </div>
        <div className="content">
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
