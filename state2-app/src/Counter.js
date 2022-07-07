import React, { Component } from "react";
import "./Counter.css";
export class Counter extends Component {
  state = {
    count: 0,
  };
  inc = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  res = (event) => {
    this.setState({
      count: 0,
    });
  };
  dec = (event) => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div className="timer-group">
          <div className="face">
            <h2>Countdown</h2>
            <p id="lazy">{this.state.count}</p>
          </div>
        </div>
        <div>
          <button onClick={this.inc} className="btns">
            Increment
          </button>
          <button onClick={this.res} className="btns">
            Reset
          </button>
          <button onClick={this.dec} className="btns">
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
