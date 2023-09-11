import React, { useState } from "react";
import "./Details.css";
import StudentCard from "../studentcard/StudentCard"
import InputBox from "../inputbox/InputBox"
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify"
function Details() {

    const[student,setStudent]=useState([])
  return (
    <div className="main">    
    <ToastContainer 
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      <h2 className="title">Get Details</h2>
      <InputBox setStudent={setStudent}/>
      <StudentCard student={student}/>
    </div>
    
  );
}

export default Details;