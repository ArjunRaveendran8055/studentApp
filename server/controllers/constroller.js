const studentsModel=require("../models/students")


const test= async (req,res)=>{
    res.json("test successful")
}

const getStudent= async (req,res)=>{
    try {
        const {rollnumber}=req.body
        //console.log(rollnumber)
        const student= await studentsModel.find({roll:rollnumber})
        if(student.length!=0){
            return res.json(student)
        }
        return res.json({message:"rollnumber not found"})
    } catch (error) {
        res.json({error:error.message})
    }
}


module.exports={test,getStudent};