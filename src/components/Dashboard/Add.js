import React, { useState } from "react";
import Swal from "sweetalert2";

const Add = ({ students, setStudents, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [department, setDepartment] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !matricNo || !department) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = students.length + 1;
    const newStudent = {
      id,
      firstName,
      lastName,
      matricNo,
      department,
    };

    students.push(newStudent);
    localStorage.setItem("students_data", JSON.stringify(students));
    setStudents(students);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="matricNumber">Matric Number</label>
        <input
          id="matricNumber"
          type="text"
          name="email"
          value={matricNo}
          onChange={(e) => setMatricNo(e.target.value)}
        />
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
