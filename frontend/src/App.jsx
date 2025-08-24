import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


export default function App() {
  return (
    <Router>
       <Navbar/>
       <main className='min-h-[80vh]'>
         <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/projects" element={<Projects/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
         </Routes>
       </main>
       <Footer/>
    </Router>
  )
}
