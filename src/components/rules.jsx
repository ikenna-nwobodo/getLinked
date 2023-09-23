import "./rules.css";
import { useEffect, useState } from "react";

const Rules = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="rules">
      <div className="rules-text">
        <div className="title">
          <h1>
            Rules and <br></br> <span>Guidelines</span>
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
      <div className="rules-img">
        <img
          src={require("../images/rulespic.png")}
          alt=""
          height={width > breakpoint ? 500 : 250}
        />
      </div>
    </div>
  );
};

export default Rules;
