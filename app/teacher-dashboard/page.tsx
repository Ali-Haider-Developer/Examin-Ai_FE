
"use client";
import React from "react";
import { FaBook, FaUpload, FaPen, FaUser, FaSignOutAlt } from "react-icons/fa";

const ExamDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-backgroundWhite text-textPrimary">
      {/* Sidebar */}
      <aside className="w-64 bg-greenLight p-6 shadow-md">
        <h1 className="font-bold text-xl text-green-600">ExamGPT</h1>
        <br />

        <nav className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-3 text-textPrimary hover:text-greenDark">
            <FaBook className="text-lg" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-textPrimary hover:text-greenDark">
            <FaUpload className="text-lg" />
            <span>Upload Content</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-textPrimary hover:text-greenDark">
            <FaPen className="text-lg" />
            <span>Generate Exam</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-textPrimary hover:text-greenDark">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-textPrimary hover:text-greenDark mt-auto">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
{/* Header Section */}
<div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg mx-4 mt-4 transform transition-all duration-300 hover:scale-[1.02]">
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold mb-2">Welcome back to Examini AI for Exam Generation</h1>
      <p className="opacity-90">Create and manage your exams seamlessly</p>
    </div>
    <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-50 transition-colors flex items-center space-x-2">
      <span>Generate Exam</span>
    </button>
  </div>
</div>


{/* Stats Section */}
<div className="grid grid-cols-2 gap-4 mt-6 px-4">
  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
    <h2 className="text-xl font-bold">Total Exam Generated</h2>
    <p className="text-4xl font-extrabold mt-2">0</p>
  </div>
  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
    <h2 className="text-xl font-bold">Recent Exam Updated</h2>
    <p className="text-lg italic opacity-90 mt-2">No Data</p>
  </div>
</div>


{/* Exam Types Section */}
<div className="grid grid-cols-4 gap-6 px-4 mt-6">
  {[
    { type: "TrueFalse", icon: "📝" },
    { type: "Short", icon: "✏️" },
    { type: "Long", icon: "📜" },
    { type: "Mcqs", icon: "✅" },
  ].map(({ type, icon }) => (
    <div key={type} className="bg-backgroundGray p-6 rounded-lg shadow-md">
      {/* Type Header with Icon */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold">{type}</h3>
      </div>

      {/* Safe Data Display */}
      {[1, 2, 3].map((set) => (
        <div
          key={set}
          className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-borderMediumGray"
        >
          <h4 className="text-sm font-semibold">Set {set}</h4>
          <p className="text-sm italic text-borderMediumGray mt-1">No Active Paper</p>

          {/* Buttons Section */}
          <div className="mt-4 flex justify-between items-center">
            {/* Edit Button */}
            <button className="bg-white text-green-600 py-2 px-3 bg-backgroundGray text-textPrimary text-xs rounded-lg border border-borderMediumGray hover:bg-borderMediumGray shadow">
              Edit
            </button>

            {/* Download Button */}
            <button className="bg-white text-green-600 py-2 px-3 bg-backgroundGray text-textPrimary text-xs rounded-lg border border-borderMediumGray hover:bg-borderMediumGray shadow">
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default ExamDashboard;
