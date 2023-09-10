import React, { useState } from "react";
import "./Details.css";
import StudentCard from "../studentCard/StudentCard";
import InputBox from "../inputbox/InputBox"

function Details() {

    const[student,setStudent]=useState([])
    console.log("student in details page is",student)
  return (
    <div className="main">
      <h2 className="title">Get Details</h2>
      <InputBox setStudent={setStudent}/>
      <StudentCard student={student}/>
    </div>
  );
}

export default Details;