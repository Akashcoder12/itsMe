import React, { useState } from 'react'

export default function Contact() {
   const [form,setForm]=useState({name:"",email:"",message:""});
   const [status,setStatus]=useState("");

   const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value});

   }

   const handleSubmit=async(e)=>{
     e.preventDefault();

     const res=await fetch("https://itsme-tatz.onrender.com/api/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form),
     });

     if(res){
         setStatus("Message sent successfully");
         setForm({name:"",email:"",message:""});
         alert("thankyou for contacting,I will respond very soon");
     }
     else{
         setStatus("Failed to send");
     }
   }

  return (
    <div className='p-8 max-w-lg mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-6'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
        />

        <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
        />

        <textarea
         name="message"
         value={form.message}
         onChange={handleChange}
         placeholder='Your Message'
         className='w-full p-3 border rounded'
         required
        ></textarea>
        
        <button 
        type="submit"
        className='w-full py-3 bg-blue-600 text-white rounded-lg  hover:bg-blue-700'
        >
            Send
        </button>
      </form>
      {
        status && <p className='mt-4 text-center'>{status}</p>
      }
    </div>
  )
}
