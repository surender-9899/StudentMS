import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get("http://localhost:8080/api/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8080/api/students/${id}`)
      .then(() => fetchStudents())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h3>Student List</h3>
      <Link to="/add-student">
        <button>Add Student</button>
      </Link>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <Link to={`/edit-student/${student.id}`}>
                    <button>Edit</button>
                  </Link>
                  &nbsp;
                  <button onClick={() => deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5">No students found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
