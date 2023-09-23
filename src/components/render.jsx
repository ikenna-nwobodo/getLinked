import Home from "./home";
import Intro from "./intro";
import Rules from "./rules";
import Criteria from "./criteria";
import Faqs from "./faq";
import Timeline from "./timeline";
import Prizes from "./prize";
import Partners from "./partner";
import Policy from "./policy";
import Footer from "./footer";
import "./render.css";

const Render = () => {
  return (
    <div className="render">
      <Home />
      <Intro />
      <Rules />
      <Criteria />
      <Faqs />
      <Timeline />
      <Prizes />
      <Partners />
      <Policy />
      <Footer />
    </div>
  );
};

export default Render;
