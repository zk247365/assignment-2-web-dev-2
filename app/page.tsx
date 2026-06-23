"use client";

import { useState } from "react";
import StudentList from "../components/StudentList";
import initialStudents from "../data/students.json";
import AddStudentForm from "../components/AddStudentForm";

export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = (student: any) => {
    setStudents([...students, student]);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>

      <AddStudentForm onAdd={handleAddStudent} />

      <StudentList students={students} />
    </div>
  );
}
