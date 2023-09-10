const express=require("express")
const app=express();
//const cors=require("cors")
const mongooose=require("mongoose")
const router=require("./routes/routes")
const bodyParser=require("body-parser")
 

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use(bodyParser())



app.use("/", router)

//mongodb connection using mongoose

mongooose.connect("mongodb+srv://arjunravi1213:root@cluster0.j4rutjw.mongodb.net/student_database?retryWrites=true&w=majority")
.then(()=>{console.log("connection successfull")})
.catch((error)=>{console.log("connection failed",error)})



//Runningports

app.listen(8055,()=>{
    console.log("Sever Running at Port 8055")
})