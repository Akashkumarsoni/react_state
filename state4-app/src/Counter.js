import React, { Component } from "react";
import "./Counter.css";
export class Counter extends Component {
  state = {
    hour: 0,
    min: 0,
    sec: 0,
    closeInterwal: "",
  };

  start = (e) => {
    document.getElementById('stopbtn').disabled = false;
    e.target.disabled = true;
    this.closeInterwal = setInterval(this.timer, 1000);
  };

  stop = (e)=>{
    clearInterval(this.closeInterwal);
    document.getElementById('startbtn').disabled = false;
    e.target.disabled = true;
  }

  reset = (e)=>{
    document.getElementById('startbtn').disabled = false;
    clearInterval(this.closeInterwal);
    this.setState({
      hour: 0,
      min: 0,
      sec: 0,
      closeInterwal: "",
    });
  }
  timer = () => {
    if (this.state.sec === 60) {
      this.setState({
        min: this.state.min + 1,
        sec: 0,
      });
    } else if (this.state.min === 60) {
      this.setState({
        hour: this.state.hour + 1,
        min: 0,
        sec: 0,
      });
    } else {
      this.setState({
        sec: this.state.sec + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <div id="clock">
          <p className="date">Digital Stop Watch</p>
          <p className="time">
            {this.state.hour}:{this.state.min}:{this.state.sec}
          </p>
          <div className="btnparent">
            <button id="startbtn" onClick={this.start}>Start</button>
            <button onClick={this.reset}>Reset</button>
            <button id="stopbtn" onClick={this.stop}>Stop</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
