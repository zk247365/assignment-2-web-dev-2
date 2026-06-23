"use client";

import React, { useState } from "react";

interface AddStudentFormProps {
  onAdd: (student: {
    firstName: string;
    lastName: string;
    birthday: string;
    grade: number;
  }) => void;
}

const AddStudentForm = ({ onAdd }: AddStudentFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !birthday || !grade) {
      setError("All fields are required.");
      return;
    }

    const newStudent = {
      firstName,
      lastName,
      birthday,
      grade: Number(grade),
    };

    onAdd(newStudent);

    // Clear form
    setFirstName("");
    setLastName("");
    setBirthday("");
    setGrade("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded bg-gray-700 mb-6 wmax-w-md">
      <h2 className="text-lg font-semibold mb-3">Add New Student</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="First Name"
          className="border p-2 rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="border p-2 rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <input
          type="number"
          placeholder="Grade"
          className="border p-2 rounded"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;
