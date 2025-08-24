import React from 'react'
import {motion} from 'framer-motion';

const skills=[
    {name:"HTML",level:"90%"},
    {name:"CSS",level:"85%"},
    {name:"Javascript",level:"80%"},
    {name:"ReactJS",level:"85%"},
    {name:"NodeJS",level:"75%"},
    {name:"MongoDB",level:"70%"}
]

export default function Skills() {
  return (
    <div>
      <h3>Skills</h3>
      <div>
        {
            skills.map((skill,index)=>{
                 return (
                   <motion.div
                     key={index}
                     initial={{width:0}}
                     animate={{width:skill.level}}
                     transition={{duration:1}}
                     className='bg-gray-200 rounded-lg'
                   >
                      <div className='bg-blue-600 text-white px-4 mt-1 py-2 rounded-lg' style={{width:skill.level}} key={index}>{skill.level}</div>
                   </motion.div>
                 )
            })
        }
      </div>
    </div>
  )
}
