import React from 'react';
import { motion } from 'framer-motion'
import profileImage from '../assets/pro pic.jpg';
import Skills from '../components/Skills';

export default function About() {
  return (
    <div className='p-8 max-w-4xl mx-auto text-center'>
      <motion.h2
       className='text-3xl font-bold mb-6'
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:0.8}}
      >
        About Me
      </motion.h2>

      <motion.div
        className='flex flex-col md:flex-row items-center gap-8'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
      >
        <img
          src={profileImage}
          alt="/Akash Gupta"
          className='w-40 rounded-full shadow-lg'
        ></img>
        <p className='text-lg text-gray-700 leading-relaxed'>
          Hi , I'm <span className='font-semibold'>Akash Gupta</span>, a passionate
          <span className='text-blue-600'> MERN Stack Developer </span>
          I love building modern web applications, solving real-world problems, and learning cutting-edge technologies.
          My goal is to become a skilled software engineer and
          contribute to impactful projects.
        </p>
      </motion.div>
       <Skills/>
    </div>
  )
}
