import React, { Component } from 'react';
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard"

class Search extends Component {
    state = {
        employees:[]
    }
    
componentDidMount(){
    axios.get("https://randomuser.me/api/?results=100").then(response =>{
        console.log(response.data.results)
        this.setState({employees: response.data.results})
    }).catch(err =>{
        console.log(err)
    })
}
    render() {
        return (
            <div className="container">
                <div className="row">    
                    <div className="col">
                    <h1>This is my search page</h1>
                    </div>
                </div> 
                <div className="row">    
                    <div className="col">
                    {this.state.employees.map(employee => (
                    <>
                    <img src={employee.picture.medium} alt={`employee.name.first employee.name.last`}/>  
                    
                    <p>Name: {employee.name.first} {employee.name.last}</p> 
                    <p>email: {employee.email}</p> <p>Nationality: {employee.nat}</p>
                    </>                    
        ))}
                    </div>
                </div>               
            </div>
        );
    }
}

export default Search;