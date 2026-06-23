import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 text-white text-center p-4 mt-10">
        <p>-{currentYear} Assignment Two HighSchool</p>
        <p>This is for the second assignment of Web Development 2</p>

    </footer>
  )
}

export default Footer