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
            <strong>Name:</strong> {props.name} {props.lastName} <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.city}, {props.country}
          </li>
        </ul>
      </div>            
        </div>
    );
};

export default EmployeeCard;