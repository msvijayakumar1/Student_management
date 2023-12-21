import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      location:"",
      email:"",
      dob:"",
      education:"",
      about:""
    },
    onSubmit:async(values)=>{
      try {
        await axios.put(`http://localhost:8000/api/updateStudent/${id}`,values)
        navigate("/")
      } catch (error) {
        console.log(error)
        alert("Something went wrong")
      }
    }
  })
useEffect(()=>{
const fetchData=async()=>{
    try {
      const student=await axios.get(`http://localhost:8000/api/student/${id}`)
      //console.log(student.data.data)
      formik.setValues(student.data.data)
    } catch (error) {  
    alert("something went wrong")   
    }
  }
  fetchData()
},[])
  
  return (
    <div className="container ">
      <div className="d-sm-flex align-items-center justify-content-between mb-5 mt-3 mr-3">
        <h2 className="h3 mb-0 text-gray-800">
          <Link to={"/"} style={{ color: "black" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-1 col-form-label">
            FirstName:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
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
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
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
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
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
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
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
              name="education"
              value={formik.values.education}
              onChange={formik.handleChange}
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
              name="about"
              value={formik.values.about}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <input type="submit" value={"Submit"} className="btn btn-dark"/>
      </form>
    </div>
  );
}

export default EditStudent;
