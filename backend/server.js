import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import projectRoutes from './routes/projectRoutes.js';
import messageRoutes from "./routes/messageRoutes.js";


dotenv.config();
const app=express();

//middleware
app.use(cors());
app.use(express.json());

//connect database
connectDB();

//routes
app.use("/api/projects",projectRoutes);
app.use("/api/messages",messageRoutes);

app.get("/",(req,res)=>{
    res.send("Portfolio API is running...");
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
     console.log(`Server running on port http://localhost:${PORT}`);
})