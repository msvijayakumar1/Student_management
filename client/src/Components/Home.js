import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getStudents } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(getStudents)
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  const get_student = (id) => {
    axios
      .get(`http://localhost:8000/api/student/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate(`/edit-student/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const deletestudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#454545",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios
          .delete(`http://localhost:8000/api/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            fetchData();
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div class="container-fluid px-5">
      <div class="d-sm-flex align-items-center justify-content-between mb-5 mt-3">
        <h1 class="h3 mb-0 text-gray-800">Student management system</h1>
      </div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <input className="rounded" placeholder="Search" type="search" />
        <Link
          to={"/create-student"}
          class="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> ADD
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Location</th>
                  <th>email</th>
                  <th>DOB</th>
                  <th>Education</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {students.getStudent?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.location}</td>
                      <td>{item.email}</td>
                      <td>{item.dob}</td>
                      <td>{item.education}</td>
                      <td>
                        <button
                          onClick={() => get_student(item._id)}
                          className="btn btn-light"
                        >
                          <Link to={"/edit-student"} style={{ color: "black" }}>
                            <FontAwesomeIcon icon={faUserPen} />
                            Edit
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deletestudent(item._id)}
                          className="btn btn-light"
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
