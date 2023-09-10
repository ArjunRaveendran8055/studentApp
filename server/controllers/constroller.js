const studentsModel=require("../models/students")


const test= async (req,res)=>{
    res.json("test successful")
}

const getStudent= async (req,res)=>{
    try {
        const {rollnumber}=req.body
        //console.log(rollnumber)
        const student= await studentsModel.find({roll:rollnumber})
        if(student){
            return res.status(200).json(student)
        }
        res.status(400).json({message:"rollnumber not found"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports={test,getStudent};