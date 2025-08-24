import Project from '../models/Project.js'

//get all projects
export const getProjects=async(req,res)=>{
     try{
        const projects=await Project.find();
        res.json(projects);
     }
     catch(err){
        res.status(500).json({message:"Server Error"});
     }
}


//add new project
export const addProject=async(req,res)=>{
    try{
        const project=new Project(req.body);
        const savedProject=await project.save();
        res.status(201).json(savedProject);
    }
    catch(err){
        res.status(400).json({message:"Invalid project data"});
    }
}
