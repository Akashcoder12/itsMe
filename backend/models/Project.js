import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    title:{type:String , required:true},
    tech_stacks:{type:String,required:true},
    description:{type:String,required:true},
    features:{type:String , required:true},
    github:{type:String},
    demo:{type:String},
    image:{type:String}
},
  {timestamps:true}
)

const Project=mongoose.model("Project",projectSchema);
export default Project;