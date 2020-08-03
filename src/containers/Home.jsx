import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";

class Search extends Component {
  state = {
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
    const filtered = this.state.employees.filter((emp) =>
      emp.name.first.includes(this.state.search)
    );
    this.setState({ employees: filtered });
  //   const filter = event.target.value;
  //   const filteredList = this.state.employees.filter(item=>{
  //     let values = Object.values(item).join("").toLowerCase();
  //     return values.indexOf(filter.toLowerCase())!== -1;
  //   });
  //  this.setState({filtered: filteredList});
  };

  handleSearch = () => {
    const filtered = this.state.employees.filter((emp) =>
      emp.name.first.includes(this.state.search)
    );
    this.setState({ employees: filtered });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 style={{marginTop: 35}}>Employees Table</h3>
          </div>
          <div className="col">
          <button style={{marginTop: 35}}>Sort Ascending</button>
          <button>Sort Decending</button>
          </div>
          <div className="col">
            <h4>Search By Name: </h4>
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
            <table style={{marginTop: 10}} className="table">
              <thead  className="thead-light">
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
