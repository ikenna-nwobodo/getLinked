import "./nav.css";
import Btn from "./button";
import { useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import LocationContext from "../contexts/locationCon";

const Nav = () => {
  const scrollToContact = useContext(LocationContext);

  const Displayfaq = () => {
    setTimeout(async () => {
      scrollToContact.faq_sect_Location();
    }, 100);
    showNav();
  };

  const displayTimeline = () => {
    setTimeout(async () => {
      scrollToContact.timeline_sect_Location();
    }, 100);
    showNav();
  };

  const displayIntro = () => {
    setTimeout(async () => {
      scrollToContact.home_sect_Location();
    }, 100);
    showNav();
  };

  const navRef = useRef();
  const contactRef = useRef();

  const activeLink = () => {
    contactRef.current.classList.add("active");
    showNav();
  };

  const showNav = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          get<span>linked</span>
        </Link>
      </div>

      <nav ref={navRef}>
        <div className="nav-link">
          <NavLink to="/" onClick={displayTimeline}>
            Timeline
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/" onClick={displayIntro}>
            Overview
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/" onClick={Displayfaq}>
            FAQs
          </NavLink>
        </div>
        <div className="nav-link contct">
          <NavLink to="/contact" onClick={activeLink}>
            Contact
          </NavLink>
        </div>
        <div className="" onClick={showNav}>
          <Btn />
        </div>
        <div className="nav-btn close-btn">
          <span class="material-symbols-rounded" onClick={showNav}>
            close
          </span>
        </div>
      </nav>
      <div className="menubtn nav-btn">
        <img src={require("../images/menu.png")} onClick={showNav} alt="" />
      </div>
    </header>
  );
};

export default Nav;
