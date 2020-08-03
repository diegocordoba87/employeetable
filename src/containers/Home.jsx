import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

class Search extends Component {
  state = {
    sortAsc: true,
    employees: [],
    search: "",
    filtered: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        this.setState({ employees: response.data.results, filtered: response.data.results  });
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(event.target.value)
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item=>{
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase())!== -1;
    });
   this.setState({filtered: filteredList});
  };

  sortEmployees = ()=>{
    function compareAsc(a, b){
      if(a.name.first > b.name.first) return 1
      if(b.name.first >a.name.first) return -1
      return 0;
    }

    function compareDesc(a, b){
      if(a.name.first > b.name.first) return -1
      if(b.name.first >a.name.first) return 1
      return 0;
    }
    if(this.state.sortAsc){
      const sortedEmployees = this.state.employees.sort(compareAsc)
      this.setState({
        filtered: sortedEmployees,
      sortAsc: false})
    }
    else {
      const sortedEmployees = this.state.employees.sort(compareDesc)
      this.setState({
        filtered: sortedEmployees,
      sortAsc: true})
    }
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 style={{marginTop: 35}}>Employees Table</h3>
          </div>
          <div className="col">
            <h4>Search: </h4>
            <input
              value={this.state.search}
              name="search"
              onChange={this.handleOnChange}
              type="text"
              placeholder="Name or Last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table style={{marginTop: 10}} className="table">
              <thead  className="thead-light">
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col" onClick={this.sortEmployees}> <button className="">First</button></th>
                  <th scope="col">Last</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              {this.state.filtered.map((employee) => (
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
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;



