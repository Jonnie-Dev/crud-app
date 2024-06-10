import React from "react";

const Table = ({ students, handleEdit, handleDelete }) => {
  students.forEach((student, i) => {
    student.id = i + 1;
  });

  return (
    <div className="students-container">
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <h2>
            {student.firstName} {student.lastName}
          </h2>
          <p>{student.department}</p>
          <p>Matric Number: {student.matricNo}</p>
          <button onClick={() => handleEdit(student.id)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Table;
