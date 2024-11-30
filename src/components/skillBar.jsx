// SkillBar.jsx
import React from "react";

const SkillBar = ({ skillName, proficiency }) => {
  return (
    <div className="flex items-center mb-4">
      <label htmlFor={skillName} className="w-2/12">
        {skillName}
      </label>
      <div className="grow bg-gray-800 rounded-full h-2.5">
        <div
          className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-${proficiency}`}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
