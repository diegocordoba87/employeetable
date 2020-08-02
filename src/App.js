import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./containers/Home"
import Search from './containers/Search';
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
    </Router>
  );
}

export default App;
