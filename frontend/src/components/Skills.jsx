import React from "react";
import {motion} from 'framer-motion';

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "Javascript", level: "80%" },
  { name: "ReactJS", level: "85%" },
  { name: "NodeJS", level: "75%" },
  { name: "MongoDB", level: "70%" },
  { name:"TailwindCSS",level:"70%"},
];

export default function Skills() {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Skills</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="font-medium mb-1">{skill.name}</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: skill.level }}
              transition={{ duration: 1 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              style={{ width: skill.level }}
            >
              {skill.level}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
