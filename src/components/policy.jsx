import "./policy.css";
import { useEffect, useState } from "react";

const Policy = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="policy">
      <div className="policy-text">
        <div className="title">
          <div className="head">
            <h1>
              Privacy Policy and <br></br> <span>Terms</span>
            </h1>
            <small>Last updated on September 12, 2023</small>
          </div>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className="content">
          <p className="po">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="licensing">
            <div className="top">
              <h2>
                <span>Licensing Policy</span>
              </h2>
              <h2>Here are terms of our Standard License:</h2>
            </div>
            <div className="terms">
              <div className="term">
                <span class="material-symbols-rounded">done</span>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="term">
                <span class="material-symbols-rounded">done</span>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <button className="btn-a">Read More</button>
          </div>
        </div>
      </div>
      <div className="policy-img">
        <img
          src={require("../images/policypic.png")}
          alt=""
          height={width > breakpoint ? 700 : 300}
        />
      </div>
    </div>
  );
};

export default Policy;
