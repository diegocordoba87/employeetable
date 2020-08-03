import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

class Search extends Component {
  state = {
    employees: [],
    searchValue: "",
    value: "",
    filter: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        this.setState({ employees: response.data.results });
        this.setState({ filtered: response.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = (searchedItem) => {
    const filtered = this.state.employees.filter((emp) =>
      emp.name.first.includes(searchedItem)
    );
    this.setState({ employees: filtered });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Employees Table</h1>
          </div>
          <div className="col">
            <h4>Search by name: </h4>
            <input
              value={this.state.search}
              name="search"
              onChange={this.handleOnChange}
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
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
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
