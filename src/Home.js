import React, { Component } from "react";
import prvi from './images/prvi.jpg';
import drugi from './images/drugi.jpg';
import treci from './images/treci.jpg';

 
class Home extends Component {
  render() {
    return (

      <div>

        <div class="container recepti">
          <div class="row">
            <div class="col-10">

              <div class="row">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={prvi} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={drugi} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={treci} alt="Third slide"/>
                    </div>
                  </div>
                </div>
              </div>


              <div class="row">  
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div>  
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div> 
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div> 

              </div>
              <div class="row">  

                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div>  
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div> 
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div> 

              </div>
              <div class="row">  

                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div>  
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div> 
                <div class="col-4">             
                  <div class="card">          
                    <div class="container">
                      <h4><b>John Doe</b></h4>
                      <p>Architect</p>
                    </div>                 
                  </div>
                </div> 

              </div>

              <button className="btn btn-secondary">Add new recipe</button>
            </div>

            <div class="col-2">
              <sidebar>
                <h3>Meals</h3>
                <p>Side dishes</p>
                <p>Desserts</p>
                <p>Breakfast</p>

                <h3>Tags</h3>
                <p>Vegan</p>
                <p>Gluten free</p>
                <p>Vegetarian</p>
              </sidebar>
            </div>

          </div>
        </div>

        






      </div>



    );
  }
}
 
export default Home;