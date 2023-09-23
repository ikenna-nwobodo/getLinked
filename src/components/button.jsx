import "./button.css";
import { NavLink } from "react-router-dom";

const Btn = () => {
  return (
    <button className="btn-a">
      <NavLink to="/register">Register</NavLink>
    </button>
  );
};

export default Btn;
