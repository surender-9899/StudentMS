import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/students/${id}`, student)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Course: </label>
          <input name="course" value={student.course} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button> &nbsp;
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default EditStudent;
