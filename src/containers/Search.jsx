import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

class Search extends Component {
  state = {
    employees: [],
    searchValue: "",
    value: ""

  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        this.setState({ employees: response.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleOnChange(event) {
    this.setState({value: event.target.value});
    this.handleSearch(this.state.value)
  }

 handleSearch=(searchedItem)=>{
     
     const filteredEmployees = this.state.employees.filter(employee => employee.name.first.includes(searchedItem));
     

     this.setState({employees: filteredEmployees});
     console.log(this.state.searchValue)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Employees Table</h1>
          </div>
          <div className="col">
              <div>
              <h4>Search by name: </h4> 
              <input type="text" value={this.state.value} onChange={this.handleOnChange} placeholder="Name"/>
              </div>         
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.employees.map((employee) => (
              <EmployeeCard
                key={employee.login.uuid}
                name={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.medium}
                email={employee.email}
                country={employee.location.country}
                city={employee.location.city}
                age={employee.dob.age}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
