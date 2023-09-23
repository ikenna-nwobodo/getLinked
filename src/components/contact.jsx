import { Link } from "react-router-dom";
import "./contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const url = "https://backend.getlinked.ai/hackathon/contact-form";
  const [data, setData] = useState({
    name: "",
    mail: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationerrors = {};
    if (!data.name.trim()) {
      validationerrors.name = "This field may not be blank";
    }
    if (!data.mail.trim()) {
      validationerrors.mail = "This field may not be blank";
    } else if (!/\S+@\S+\.\S+/.test(data.mail)) {
      validationerrors.mail = "Enter valid email address";
    }
    if (!data.message.trim()) {
      validationerrors.message = "This field may not be blank";
    }

    setErrors(validationerrors);
    if (Object.keys(validationerrors).length === 0) {
      axios
        .post(url, {
          first_name: data.name,
          email: data.mail,
          message: data.message,
        })
        .then((res) => {})
        .catch((err) => console.log(err));
      setData({
        name: "",
        mail: "",
        message: "",
      });
    }
  };
  return (
    <div className="ctx">
      <div className="back">
        <div>
          <Link to="/">
            <span class="material-symbols-rounded">arrow_back</span>
          </Link>
        </div>
      </div>
      <div className="contact-page">
        <div className="contact-info">
          <h1>
            <span>Get in touch</span>
          </h1>
          <div>
            <p>
              Contact <br></br>Information
            </p>
          </div>
          <div>
            <p>
              27,Alara Street<br></br> Yaba 100012<br></br> Lagos State
            </p>
          </div>
          <div>
            <p>Call Us : 07067981819</p>
          </div>
          <div>
            <p>
              we are open from Monday-Friday<br></br>08:00am - 05:00pm
            </p>
          </div>
          <div className="social-links">
            <span>Share on</span>
            <div>
              <img src={require("../images/fb.png")} alt="" height={15} />
              <img src={require("../images/x.png")} alt="" height={15} />
              <img src={require("../images/insta.png")} alt="" height={20} />
              <img src={require("../images/li.png")} alt="" height={20} />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form className="form">
            <h2>
              <span>
                Questions or need assistance? <br></br>Let us know about it!
              </span>
            </h2>
            <p className="cont pls">
              Email us below to any question related to our event
            </p>
            <div>
              <input
                type="text"
                placeholder="Team's Name"
                className="cont ccc"
              />
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="First Name"
                value={data.name}
                required
                onChange={(e) => handleInput(e)}
              />
              {errors.name && (
                <small className="error">
                  <span class="material-symbols-rounded">report</span>
                  {errors.name}
                </small>
              )}
            </div>
            <div>
              <input
                type="text"
                id="mail"
                placeholder="Mail"
                onChange={(e) => handleInput(e)}
                required
                value={data.mail}
              />
              {errors.mail && (
                <small className="error">
                  <span class="material-symbols-rounded">report</span>
                  {errors.mail}
                </small>
              )}
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Message"
                value={data.message}
                required
                rows={8}
                onChange={(e) => handleInput(e)}
              ></textarea>
              {errors.message && (
                <small className="error">
                  <span class="material-symbols-rounded">report</span>
                  {errors.message}
                </small>
              )}
            </div>
            <button className="btn-a" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <div className="social-links">
            <span>Share on</span>
            <div>
              <img src={require("../images/fb.png")} alt="" height={15} />
              <img src={require("../images/x.png")} alt="" height={15} />
              <img src={require("../images/insta.png")} alt="" height={20} />
              <img src={require("../images/li.png")} alt="" height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
