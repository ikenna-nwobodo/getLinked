import { Link } from "react-router-dom";
import "./register.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Register = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(0);
  const [modal, setModal] = useState(false);
  const [errors, setErrors] = useState({});
  const breakpoint = 1050;
  const [data, setData] = useState({
    team_name: "",
    phone: "",
    email: "",
    project_topic: "",
    category: 0,
    size: 0,
    policy_accepted: false,
  });
  const toggleModal = () => {
    setModal(true);
  };
  const hcat = (e) => {
    setCategory(e.target.value);
  };
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    newData.policy_accepted =
      document.getElementById("policy_accepted").checked;
    newData.category = category;
    setData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationerrors = {};
    if (!data.category === 1 || !data.category === 2 || !data.category === 3) {
      validationerrors.category = "Select a category";
    } else if (data.category === 0) {
      validationerrors.category = "Select a category";
    }
    if (!data.email.trim()) {
      validationerrors.mail = "This field may not be blank";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationerrors.mail = "Enter valid email address";
    }
    if (!data.phone.trim()) {
      validationerrors.phone = "This field may not be blank";
    } else if (!/^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(data.phone)) {
      validationerrors.phone = "Enter a valid phone number";
    }
    if (!data.project_topic.trim()) {
      validationerrors.projectTopic = "This field may not be blank";
    }
    if (!data.team_name.trim()) {
      validationerrors.teamName = "This field may not be blank  ";
    }
    if (!/^[0-9]+$/.test(data.size)) {
      validationerrors.size = "Please enter only numbers";
    }

    setErrors(validationerrors);

    if (Object.keys(validationerrors).length === 0) {
      const registerUrl = "https://backend.getlinked.ai/hackathon/registration";
      axios
        .post(registerUrl, {
          email: data.email,
          phone_number: data.phone,
          team_name: data.team_name,
          group_size: data.size,
          project_topic: data.project_topic,
          category: data.category,
          privacy_poclicy_accepted: data.policy_accepted,
        })
        .then((res) => {
          toggleModal();
          setData({
            team_name: "",
            phone: "",
            size: 0,
            email: "",
            project_topic: "",
            category: 0,
            policy_accepted: false,
          });
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    const categoryUrl =
      "https://backend.getlinked.ai/hackathon/categories-list";
    axios
      .get(categoryUrl)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  const checkRef = useRef();
  return (
    <div className="ctx">
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={require("../images/done.png")}
              alt=""
              height={width > breakpoint ? 400 : 200}
            />
            <h2>
              Congratulations<br></br> you have successfully Registered!
            </h2>
            <p>
              Yes, it was easy and you did it! check your mail box for next
              step😉
            </p>
            <button className="btn-a">
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
      )}
      <div className="reg-page">
        <div className="reg-info">
          <img
            src={require("../images/register.png")}
            alt=""
            height={width > breakpoint ? 600 : 200}
          />
        </div>
        <div className="reg-form">
          <form className="form">
            <h2>
              <span>Register</span>
            </h2>
            <small>
              Be part of this movement!
              <img src={require("../images/ngswalk.png")} alt="" height={20} />
            </small>
            <p>CREATE YOUR ACCOUNT</p>
            <div className="frrr">
              <div className="frm">
                <div className="form-input">
                  <label>Team's Name</label>
                  {errors.teamName && (
                    <small className="error">
                      <span class="material-symbols-rounded">report</span>
                      {errors.teamName}
                    </small>
                  )}
                  <input
                    id="team_name"
                    type="text"
                    placeholder="Enter the name of your group"
                    onChange={(e) => handleInput(e)}
                    value={data.team_name}
                  />
                </div>
                <div className="form-input">
                  <label>Phone</label>
                  {errors.phone && (
                    <small className="error">
                      <span class="material-symbols-rounded">report</span>
                      {errors.phone}
                    </small>
                  )}
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    onChange={(e) => handleInput(e)}
                    value={data.phone}
                  />
                </div>
              </div>
              <div className="frm">
                <div className="form-input">
                  <label>Email</label>
                  {errors.mail && (
                    <small className="error">
                      <span class="material-symbols-rounded">report</span>
                      {errors.mail}
                    </small>
                  )}
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter your email address"
                    onChange={(e) => handleInput(e)}
                    value={data.email}
                  />
                </div>
                <div className="form-input">
                  <label>Project Topic</label>
                  {errors.projectTopic && (
                    <small className="error">
                      <span class="material-symbols-rounded">report</span>
                      {errors.projectTopic}
                    </small>
                  )}
                  <input
                    id="project_topic"
                    type="text"
                    placeholder="What is your group project topic"
                    onChange={(e) => handleInput(e)}
                    value={data.project_topic}
                  />
                </div>
              </div>
              <div className="frm last">
                <div className="form-input fl">
                  <label>Category</label>
                  {errors.category && (
                    <small className="error">
                      <span class="material-symbols-rounded">report</span>
                      {errors.category}
                    </small>
                  )}
                  <select defaultValue="default" onChange={(e) => hcat(e)}>
                    <option value="default" disabled>
                      Select
                    </option>
                    {categories
                      ? categories.map((category, index) => {
                          return (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          );
                        })
                      : null}
                  </select>
                </div>
                <div className="form-input">
                  <label>Group Size</label>
                  {errors.size && (
                    <small className="error">
                      <span class="material-symbols-rounded">report</span>
                      {errors.size}
                    </small>
                  )}
                  <input
                    id="size"
                    type="text"
                    onChange={(e) => handleInput(e)}
                    value={data.size}
                  />
                </div>
              </div>
            </div>
            <span className="rvw">
              Please review your registration details before submitting
            </span>
            <div className="chkbx">
              <input
                type="checkbox"
                id="policy_accepted"
                onChange={(e) => handleInput(e)}
                value={data.policy_accepted}
                ref={checkRef}
                checked
              />
              <p>
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <button className="btn-a" onClick={handleSubmit}>
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
