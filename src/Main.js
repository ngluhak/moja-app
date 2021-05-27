import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
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
              <div className="naslov col-12">
                <div className="mojlogo"></div>
                <h1>
                  <b>Cook Book</b>
                </h1>
              </div>
            </div>
            <div className="row">
              <ul className="header">
                <li>
                  <NavLink exact to="/">
                    Homepage
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/stuff">Random Recipe Generator</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <input
                    type="text"
                    id="trazilica"
                    onkeyup="myFunction()"
                    placeholder="Search for recipes.."
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
              </div>
            </div>
          </div>

          <footer className="container">
            <div className="row">
              <div className="razmak col-12">
                <h2>Cook Book</h2>
                <p>Copyright by Nina Gluhak</p>
              </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
