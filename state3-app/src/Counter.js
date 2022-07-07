import React, { Component } from "react";
import "./Counter.css";
export class Counter extends Component {
  state = {
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    closeInterwal:""
  };

  start = (e) => {
    document.getElementById("heading").innerHTML = "Countdown Started";
    e.target.disabled = true;
    this.closeInterwal = setInterval(this.timer, 1000);
  };

  timer = () => {
    if(this.state.sec === 0){
      this.setState({
        min: this.state.min - 1,
        sec : 59
      });
    }
    else if(this.state.min === 0){
      this.setState({
        hour: this.state.hour - 1,
        min : 59,
        sec : 59
      });
    }
    else
    {
      this.setState({
        sec: this.state.sec - 1,
      });
    }
    
  };
  res = () => {
    clearInterval(this.closeInterwal);
    document.getElementById("heading").innerHTML = "Current Time";
    document.getElementById("startbtn").disabled=false;
    this.setState({
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
    });
  };

  render() {
    return (
      <div>
        <div class="timer-group">
          <div class="timer hour">
            <div class="hand">
              <span></span>
            </div>
            <div class="hand">
              <span></span>
            </div>
          </div>
          <div class="timer minute">
            <div class="hand">
              <span></span>
            </div>
            <div class="hand">
              <span></span>
            </div>
          </div>
          <div class="timer second">
            <div class="hand">
              <span></span>
            </div>
            <div class="hand">
              <span></span>
            </div>
          </div>
          <div class="face">
            <p id="lazy">
              {this.state.hour}:{this.state.min}:{this.state.sec}
            </p>
          </div>
        </div>
        <div>
          <h2 id="heading">Current Time</h2>
          <button onClick={this.start} id="startbtn" className="btns">
            Start
          </button>
          <button onClick={this.res} className="btns">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
