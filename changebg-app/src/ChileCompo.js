import logo from "./logo.svg";
import "./App.css";
export const ChileCompo = (props) => {
    if (props.val % 2 == 0) {
      return (
        <div>
          <header className="App-header" style={{ backgroundColor: "red" }}>
            <img src={logo} className="App-logo" alt="logo" />
            {props.children}
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header className="App-header" style={{ backgroundColor: "blue" }}>
            <img src={logo} className="App-logo" alt="logo" />
            {props.children}
          </header>
        </div>
      );
    }
  };
  