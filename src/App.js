import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from './containers/Search';
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={Search}/>
    </Router>
  );
}

export default App;
