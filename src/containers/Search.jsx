import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

class Search extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        console.log(response.data.results);
        this.setState({ employees: response.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Welcome to my company!</h1>
          </div>
          <div className="col">
            
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.employees.map((employee) => (
              <EmployeeCard
                id={employee.id.value}
                key={employee.id.value}
                name={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.medium}
                email={employee.email}
                nationality={employee.nat}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
