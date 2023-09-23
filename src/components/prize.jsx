import "./prize.css";
import { useEffect, useState } from "react";

const Prizes = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="prize">
      <div className="prize-text">
        <div className="title">
          <h1>
            Prizes and <br></br> <span>Rewards</span>
          </h1>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <div className="prize-img">
        <div className="prize-pic">
          <img
            src={require("../images/prizepic.png")}
            alt=""
            height={width > breakpoint ? 400 : 170}
          />
        </div>
        <div className="prize-rewards">
          <img
            src={require("../images/Rewards.png")}
            alt=""
            height={width > breakpoint ? 400 : 200}
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
