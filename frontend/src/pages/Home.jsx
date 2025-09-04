import React from 'react'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh]  text-center'>
       <motion.h1
        className='text-4xl font-bold'
        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.6}}
       > Hi, I'm Akash Gupta
       </motion.h1>
         
       <motion.p
         className='text-lg mt-4'
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.8}}
       >
        MERN Stack Developer | Building Modern Web Apps
       </motion.p> 

       <a href="frontend\public\clgresume.pdf"
         download
         className='mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
       >
        Download Resume
       </a>
    </div>
  )
}
