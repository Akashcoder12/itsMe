import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes.js';
import messageRoutes from "./routes/messageRoutes.js";
import path from 'path';

dotenv.config();
const app=express();

const _dirname=path.resolve();
const corsOptions={
    origin:"https://itsme-tatz.onrender.com/",
    Credential:true
}

//middleware
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());

//connect database
connectDB();

//routes
app.use("/api/projects",projectRoutes);
app.use("/api/messages",messageRoutes);


app.use(express.static(path.join(_dirname,"/frontend/dist")));

app.get("/*splat",(req,res)=>{
     res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
     console.log(`Server running on port http://localhost:${PORT}`);
})