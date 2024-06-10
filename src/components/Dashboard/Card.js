import React from "react";

const Table = ({ students, handleEdit, handleDelete }) => {
  students.forEach((student, i) => {
    student.id = i + 1;
  });

  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <h2>
            {student.firstName} {student.lastName}
          </h2>
          <p>{student.department}</p>
          <p>Matric Number: {student.matricNo}</p>
          <button onClick={() => handleEdit()}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Table;
