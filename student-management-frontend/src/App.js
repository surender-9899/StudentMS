import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <Router>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Student Management System</h2>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
