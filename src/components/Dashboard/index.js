import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Search from "./Search";

import Header from "./Header";
import Card from "./Card";
import Add from "./Add";
import Edit from "./Edit";

import { studentsData } from "../../data";

const Dashboard = () => {
  const [students, setStudents] = useState(studentsData);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students_data"));
    if (data !== null && Object.keys(data).length !== 0) setStudents(data);
  }, []);

  const handleEdit = (id) => {
    const [student] = students.filter((el) => el.id === id);

    setSelectedStudent(student);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [student] = students.filter((el) => el.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${student.firstName} ${student.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const studentsCopy = students.filter((el) => el.id !== id);
        localStorage.setItem("students_data", JSON.stringify(studentsCopy));
        setStudents(studentsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <Search />
          <Card
            students={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          students={students}
          setStudents={setStudents}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          students={students}
          selectedStudent={selectedStudent}
          setStudents={setStudents}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
