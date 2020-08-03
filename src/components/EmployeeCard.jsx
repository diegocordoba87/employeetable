import React from "react";

const EmployeeCard = (props) => {
  return (
  <tbody>
    <tr>
    <td><img alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
      <td>{props.email}</td>
      <td>{props.city}, {props.country}</td>
    </tr>
      
  </tbody>
  );
};

export default EmployeeCard;


