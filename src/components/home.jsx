import "./home.css";
import Btn from "./button";
import { useEffect, useState } from "react";

const Home = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="home">
      <div className="top-text">
        <h3>Igniting a Revolution in HR Innovation</h3>
        <div>
          <img src={require("../images/line.png")} alt="" height={10} />
        </div>
      </div>
      <div className="home-items">
        <div className="text">
          <div className="txt-title">
            <h1 className="title">
              <div className="light">
                <img src={require("../images/light.png")} alt="" height={30} />
              </div>
              getLinked Tech <br></br>
              <div className="btm-text">
                Hackathon <span>1.0</span>
                <img src={require("../images/chain.png")} alt="" height={50} />
                <img src={require("../images/bang.png")} alt="" height={35} />
              </div>
            </h1>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Btn />
          </div>
          <div className="time">
            <h1>
              00<span>h</span>
            </h1>
            <h1>
              00<span>m</span>
            </h1>
            <h1>
              00<span>s</span>
            </h1>
          </div>
        </div>
        <div className="homeimg">
          <img
            src={require("../images/landingpic.png")}
            alt=""
            height={width > breakpoint ? 600 : 300}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
