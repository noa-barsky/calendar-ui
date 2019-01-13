import React,  { Component } from 'react';
import "./style.css";
import { readSync } from 'fs';
class Title extends React.Component {
  render() {
    return (
      <div class="title">
        <div class="container">
          <select id="selectId" class="custom-select custom-select-sm" >
            <option value="" selected disabled hidden>Month</option>
            <option value="jan" >January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>

        </div>
      </div>



    );
  }
}

class Weekdays extends React.Component {
  render () {
    return (
      <div class ="week-title">
      <div class="container">
      <div class="card-group">
        <div class="card">
        <div class="card-body">
            <p class="card-text">Sunday</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">Monday</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">Tuesday</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">Wednesday</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">Thursday</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">Friday</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">Saturday</p>
          </div>
        </div>
        </div>       
    </div>
    </div>
    );
  }
}

class Buttons extends React.Component {
  printFunc() {
    window.print();
  }
  render() {
    return (
      <div class="row">

      <div class="col-md-6" >
      
      <button type="button" class="btn btn-primary btn-lg" onClick={this.printFunc}>Print</button>
      </div>
      <div class="col-md-6">
      <div class="float-right"><a href="https://github.com/noa-barsky/calendar-ui"><button type="button" class="btn btn-secondary btn-lg">Code</button> </a></div>
      
      </div>
      
      
      </div>
    );

  }
}



class Weeks extends React.Component {
  
      render() {
        return(
          <div class="days">
          <div class="container">


          <div class="card-group">
            <div class="card">
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
                <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
              <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
              <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
              {/* <p id="box-4">4</p> */}
              <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
              <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            <div class="card" >
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
              <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
              <input id="box-4" placeholder="#"></input>
              <textarea type="text" id="htmlcode"></textarea>
              </div>
            </div>
            </div>



            </div>  
            </div>
          
        );
      }

}




class Calendar extends React.Component {
    render() {
      return (
        <div>

            <div >
              <Title />
            </div>
            {/* Weekdays labels */}
            <div class="row">
            <Weekdays />
          </div>
          {/* Weekdays labels */}
          {/*Weeks*/}
          <div class="row">  
          <Weeks />
          </div>
          <div class="row">  
          <Weeks />
          </div>
          <div class="row">  
          <Weeks />
          </div>
          <div class="row">  
          <Weeks />
          </div>
          <div class="row">  
          <Weeks />
          </div>

          <div class="container">
          <div class="btns">      
          <Buttons />
          </div>
          </div>

         </div>

      );}
}





export default Calendar;
