import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

export default function Projects() {
  
   const [projects,setProjects]=useState([]);

   useEffect(()=>{
     fetch("https://itsme-tatz.onrender.com/api/projects")
     .then(res=>res.json())
     .then(data=>setProjects(data));
   },[]);

  return (
    <div className='p-8'>
      <h2 className='text-3xl font-bold text-center mb-6'>My Projects</h2>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {
            projects.map((p)=>{
                  return (
                    <motion.div 
                    key={p._id} 
                    className='bg-white shadow-lg rounded-xl p-4'
                    whileHover={{scale:1.05}}
                    transition={{type:"spring",stiffness:200}}
                    >
                    <img src={p.image} alt={p.title} className='rounded-lg mb-4'></img>
                    <h3 className='text-xl font-semibold'>{p.title}</h3>
                    <p className='text-gray-600'>{p.description}</p>
                    <div className='mt-3 space-x-3'>
                         <a href={p.github} className='text-blue-600'>Github</a>
                         <a href={p.demo} className='text-green-600'>Demo</a>
                    </div>
                    </motion.div>
                  )
            })
        }
      </div>
    </div>
  )
}
