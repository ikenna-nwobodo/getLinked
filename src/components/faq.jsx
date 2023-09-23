import "./faq.css";
import { useEffect, useState } from "react";

const Faqs = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="faqs" id="faqs">
      <div className="faqs-text">
        <div className="title">
          <h1>
            Frequently Ask <br></br> <span>Question</span>
          </h1>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </div>
        <div className="content">
          <div className="faq-list">
            <div className="faq">
              <p>Can I work on a project I started before the hackathon?</p>
              <span class="material-symbols-rounded">add</span>
            </div>
            <div className="faq">
              <p>What happens if I need help during the hackathon?</p>
              <span class="material-symbols-rounded">add</span>
            </div>
            <div className="faq">
              <p>What happens if I don't have an idea for a project?</p>
              <span class="material-symbols-rounded">add</span>
            </div>
            <div className="faq">
              <p>Can I join a team or do I have to come with one?</p>
              <span class="material-symbols-rounded">add</span>
            </div>
            <div className="faq">
              <p>What happens after the hackathon ends?</p>
              <span class="material-symbols-rounded">add</span>
            </div>
            <div className="faq">
              <p>Can I work on a project I started before the hackathon?</p>
              <span class="material-symbols-rounded">add</span>
            </div>
          </div>
        </div>
      </div>
      <div className="faqs-img">
        <img
          src={require("../images/faqpic.png")}
          alt=""
          height={width > breakpoint ? 500 : 250}
        />
      </div>
    </div>
  );
};

export default Faqs;
