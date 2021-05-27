import React, { Component } from "react";
import prvi from "./images/prvi.jpg";
import drugi from "./images/drugi.jpg";
import treci from "./images/treci.jpg";
import av from "./images/avatar.png";
import jedan from "./images/1.jpg";
import dva from "./images/2.jpg";
import tri from "./images/3.jpg";
import cetiri from "./images/4.jpg";
import pet from "./images/5.jpg";
import sest from "./images/6.jpg";
import sedam from "./images/7.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="container recepti">
          <div class="row">
            <div class="col-lg-10">
              <div class="row">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={prvi}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={drugi}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={treci}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <br />
                <br />
                <h2 className="razmak">
                  <b>New recipes</b>
                </h2>
                <hr />
                <div className="col-sm-12 col-lg-4">
                  <div className="card">
                    <div className="container">
                      <img className="d-block w-100" src={jedan} alt="bla" />
                      <h4>
                        <i>Traditional Pizza</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={dva} alt="bla" />
                      <h4>
                        <i>Tomato Soup</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={tri} alt="bla" />
                      <h4>
                        <i>Student's Stew</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={cetiri} alt="bla" />
                      <h4>
                        <i>Toasted Sandwitch</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={pet} alt="bla" />
                      <h4>
                        <i>Best Dip Ever</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={sest} alt="bla" />
                      <h4>
                        <i>Cancer Preventer</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={sedam} alt="bla" />
                      <h4>
                        <i>Japan at Home</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={jedan} alt="bla" />
                      <h4>
                        <i>Pizza Calzone</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <div class="container">
                      <img className="d-block w-100" src={dva} alt="bla" />
                      <h4>
                        <i>Letter Soup</i>
                      </h4>
                      <button className="btn gumbek">More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button id="gumb" className="btn">
                  Add new recipe
                </button>
              </div>
            </div>

            <div class="col-sm-12 col-lg-2">
              <sidebar>
                <div class="razmak row">
                  <h3>Meals</h3>
                  <hr />
                  <p>Stews</p>
                  <p>Side dishes</p>
                  <p>Desserts</p>
                  <p>Breakfast</p>
                  <p>Soups</p>
                  <p>Drinks</p>
                  <p>Dips</p>
                  <p>Salads</p>
                </div>
                <br />
                <div class="razmak row">
                  <h3>Diets</h3>
                  <hr />
                  <p>Vegan</p>
                  <p>Gluten free</p>
                  <p>Vegetarian</p>
                  <p>Keto</p>
                </div>
                <br />
                <div class="razmak row">
                  <h3>Preparation</h3>
                  <hr />
                  <p>less than 30 min</p>
                  <p>30 - 60 min</p>
                  <p>1 - 2 hrs</p>
                  <p>more than 2 hrs</p>
                </div>
                <br />
                <div class="razmak row">
                  <h3>Difficulty</h3>
                  <hr />
                  <p>Simple</p>
                  <p>Average</p>
                  <p>Pro</p>
                </div>
              </sidebar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
