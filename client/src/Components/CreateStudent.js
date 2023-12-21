import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { createStudent } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState([]);
  const [lastname, setLastName] = useState([]);
  const [location, setLocation] = useState([]);
  const [email, setEmail] = useState([]);
  const [dob, setDob] = useState([]);
  const [education, setEducation] = useState([]);
  const [about, setAbout] = useState([]);

  const data = {
    firstname,
    lastname,
    location,
    email,
    dob,
    education,
    about,
  };

  const createStudentdata = (e) => {
    e.preventDefault();
    axios
      .post(createStudent, data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container ">
      <div className="d-sm-flex align-items-center justify-content-between mb-5 mt-3 mr-3">
        <h2 className="h3 mb-0 text-gray-800">
          <Link to={"/"} style={{ color: "black" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </h2>
      </div>
      <form>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-1 col-form-label">
            FirstName:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <label for="inputEmail3" className="col-sm-1 col-form-label">
            Lastname:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-1 col-form-label">
            Location:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-1 col-form-label">
            Email:
          </label>
          <div className="col-sm-5">
            <input
              type="email"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-1 col-form-label">
            DOB:
          </label>
          <div className="col-sm-5">
            <input
              type="date"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-1 col-form-label">
            Education:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-1 col-form-label">
            About:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </div>
        <button onClick={createStudentdata} className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateStudent;
