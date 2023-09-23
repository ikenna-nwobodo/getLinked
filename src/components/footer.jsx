import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="about">
          <div className="company">
            <h2>
              get<span>linked</span>
            </h2>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="pol">
            <p>Terms of Use</p>
            <span>|</span>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="links">
          <p className="links-title">Useful Links</p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className="socials">
            <small>Follow us</small>
            <img src={require("../images/fb.png")} alt="" height={15} />
            <img src={require("../images/x.png")} alt="" height={15} />
            <img src={require("../images/insta.png")} alt="" height={20} />
            <img src={require("../images/li.png")} alt="" height={20} />
          </div>
        </div>
        <div className="contact">
          <p className="contact-title">Contact Us</p>
          <div className="con-links">
            <div className="con-link">
              <img src={require("../images/phone.png")} alt="" />
              <p>+234 679 81819</p>
            </div>
            <div className="con-link">
              <img src={require("../images/location.png")} alt="" />
              <p>
                27,Alara Street
                <br /> Yaba 100012 <br /> Lagos State
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>All rights reserved. © getlinked Ltd.</p>
    </div>
  );
};

export default Footer;
