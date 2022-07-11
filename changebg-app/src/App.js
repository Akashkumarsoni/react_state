import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { ChileCompo } from "./ChileCompo";

export default class App extends Component {
  state = {
    num: 2,
  };

  inputHandler = (e) => {
    this.setState({
      num: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <ChileCompo val={this.state.num}>
          <p>
            <input
              type="Number"
              onChange={this.inputHandler}
              className="inptsugg"
            />
          </p>
        </ChileCompo>
      </div>
    );
  }
}

