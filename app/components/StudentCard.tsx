import React from "react";

interface StudentCardProps {
  firstName: string;
  lastName: string;
  birthday: string; // or "dob" if your JSON uses dob
  grade: number;
}

const StudentCard = ({
  firstName,
  lastName,
  birthday,
  grade,
}: StudentCardProps) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-gray-800">
      <h2 className="font-semibold text-lg">
        {firstName} {lastName}
      </h2>
      <p>Date of Birth: {birthday}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default StudentCard;
