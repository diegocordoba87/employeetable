import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/Home';
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/employeetable" component={Home}/>
    </Router>
  );
}

export default App;
