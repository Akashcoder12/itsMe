import Message from '../models/Message.js'

//get all messages

export const getMessages=async(req,res)=>{
    try{
        const messages=await Message.find();
        res.json(messages);
    }
   catch(err){
    res.status(500).json({message:"Server Error"});
   }
}


//send a message
export const sendMessage=async(req,res)=>{
     try{
        const message=new Message(req.body);
        const savedMessage=await message.save();
        res.status(201).json(savedMessage);
     }
     catch(err){
        res.status(400).json({message:"Invalid message data"});
     }
};