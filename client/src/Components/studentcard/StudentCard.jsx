import React from 'react'
import "./Card.css"

function StudentCard(props) {

  const {student}=props;

  return (

    student.map((item, index)=>{
      return(
        <div key={index}>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="card">
          <div id="avatar">
            <img alt='' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" />
          </div>
          <div id="check">
            <i className="fa fa-check" />
          </div>
          <div id="name">{item.name}</div>
          <div id="job" />
          <div id="info">
            <ul>
              <li>
                Class: <span><b>{item.class}{item.division}</b></span>
              </li>
              <li>
                Roll Number: <span><b>{item.roll}</b></span>
              </li>
              <li>
                Gender : <span><b>{item.sex}</b></span>
              </li>
              <li>
              Mob : <span><b>{item.w_number}, {item.mob_number}</b></span>
            </li>
            </ul>
          </div>
          
        </div>
      
      </div>

      )

    })


  )
}

export default StudentCard;