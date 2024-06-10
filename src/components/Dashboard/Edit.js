import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ students, selectedStudents, setStudent, setIsEditing }) => {
  const id = selectedStudents.id;

  const [firstName, setFirstName] = useState(selectedStudents.firstName);
  const [lastName, setLastName] = useState(selectedStudents.lastName);
  const [matricNo, setMatricNo] = useState(selectedStudents.matricNo);
  const [department, setDepartment] = useState(selectedStudents.department);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !matricNo || !department) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      firstName,
      lastName,
      matricNo,
      department,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, student);
        break;
      }
    }

    localStorage.setItem("students_data", JSON.stringify(students));
    setStudent(students);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${student.firstName} ${student.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
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
        <label htmlFor="email">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <label htmlFor="matricNumber">Matric Number ($)</label>
        <input
          id="matricNumber"
          type="text"
          name="Matric Number"
          value={matricNo}
          onChange={(e) => setMatricNo(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
