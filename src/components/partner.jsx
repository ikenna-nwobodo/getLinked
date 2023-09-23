import "./partner.css";
import { useEffect, useState } from "react";

const Partners = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="partners">
      <div className="head">
        <h1>Partners and Sponsors</h1>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <img
        src={require("../images/Partner.png")}
        alt=""
        height={width > breakpoint ? 400 : 170}
      />
    </div>
  );
};

export default Partners;
