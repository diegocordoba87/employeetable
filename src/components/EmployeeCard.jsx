import React from "react";


const EmployeeCard = (props) => {
    return (
        <div className="card">
            <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name} <strong>Last Name:</strong> {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Nationality:</strong> {props.nationality}
          </li>
        </ul>
      </div>            
        </div>
    );
};

export default EmployeeCard;