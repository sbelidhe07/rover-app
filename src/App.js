import './App.css';
import InventoryManagement from './InventoryManagement';
import Battery from './Battery';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Environment from "./containers/Environment";


export default class App extends React.Component {

render() {
    return (
      <Router>
         <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                    <a className="navbar-brand" href="/">Rover Application</a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                     <div className="collapse navbar-collapse" id="navbarNavDropdown">
                         <ul className="navbar-nav">
                                          <li className="nav-item">
                                            <a className="nav-link" href="/inventory" data-toggle="dropdown">
                                              Inventory Module
                                            </a>
                                          </li>
                                         <li className="nav-item">
                                            <a className="nav-link" href="/battery" data-toggle="dropdown">
                                              Battery Module
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a className="nav-link" href="/environment" data-toggle="dropdown">
                                              Environment Module
                                            </a>
                                          </li>
                                        </ul>
                                </div>
                                 </div>
                           </nav>
                <Switch>
                    <Route path="/inventory" exact component={InventoryManagement} />
                    <Route path="/battery" exact component={Battery} />
                    <Route path="/environment" exact component={Environment} />
                 </Switch>
         </Router>       
    );
}
}
