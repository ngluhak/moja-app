import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for music.."/>
                </div>
                <div className="col-6">
                  <div className="mojlogo"></div>
                  <h1>Cook Book</h1>
                </div>
              </div>
              <div className="row">
                <ul className="header">
                  <li><NavLink exact to="/">Homepage</NavLink></li>
                  <li><NavLink to="/stuff">Random Recipe Generator</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/stuff" component={Stuff}/>
                  <Route path="/contact" component={Contact}/>
                </div>
              </div>
            </div>

            <footer className="container">
              <div className="row">
                <div className="col-6">
                  <h1>Cook Book</h1>
                </div>
                <div className="col-3">
                  <h1>Cook Book</h1>
                </div>
                <div className="col-3">
                  <h1>Cook Book</h1>
                </div>                
              </div>
            </footer>


          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;