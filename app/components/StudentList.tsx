import React from "react";
import StudentCard from "./StudentCard";

interface Student {
  firstName: string;
  lastName: string;
  birthday: string; // or dob
  grade: number;
}

interface Props {
  students: Student[];
}

const StudentList = ({ students }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          firstName={student.firstName}
          lastName={student.lastName}
          birthday={student.birthday} // or dob={student.dob}
          grade={student.grade}
        />
      ))}
    </div>
  );
};

export default StudentList;
