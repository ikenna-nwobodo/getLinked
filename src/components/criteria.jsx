import "./criteria.css";
import { useEffect, useState } from "react";

const Criteria = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="criteria">
      <div className="criteria-img">
        <img
          src={require("../images/criteriapic.png")}
          alt=""
          height={width > breakpoint ? 500 : 250}
        />
      </div>
      <div className="criteria-text">
        <div className="title">
          <h1>
            Judging Criteria <br></br> <span>Key attributes </span>
          </h1>
        </div>
        <div className="content">
          <div className="attributes">
            <div className="attr">
              <span>Innovation and Creativity</span>: Evaluate the uniqueness
              and creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features.
            </div>
            <div className="attr">
              <span>Functionality</span>: Assess how well the solution works.
              Does it perform its intended functions effectively and without
              major issues? Judges would consider the completeness and
              robustness of the solution.
            </div>
            <div className="attr">
              <span>Impact and Relevance</span>: Determine the potential impact
              of the solution in the real world. Does it address a significant
              problem, and is it relevant to the target audience? Judges would
              assess the potential social, economic, or environmental benefits.
            </div>
            <div className="attr">
              <span>Technical Complexity</span>: Evaluate the technical
              sophistication of the solution. Judges would consider the
              complexity of the code, the use of advanced technologies or
              algorithms, and the scalability of the solution.
            </div>
            <div className="attr">
              <span>Adherence to Hackathon Rules</span>: Judges will Ensure that
              the team adhered to the rules and guidelines of the hackathon,
              including deadlines, use of specific technologies or APIs, and any
              other competition-specific requirements.
            </div>
          </div>
          <button className="btn-a">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
