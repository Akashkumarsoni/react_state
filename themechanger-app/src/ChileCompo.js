import logo from "./logo.svg";
import "./App.css";
export const ChileCompo = (props) => {
    if (props.val === "light") {
      return (
        <div>
          <header className="App-header" style={{ backgroundColor: "white" }}>
            <img src={logo} className="App-logo" alt="logo" />
            {props.children}
          </header>
        </div>
      );
    } 
    else if (props.val === "dark") {
      return (
        <div>
          <header className="App-header" style={{ backgroundColor:"black"}}>
            <img src={logo} className="App-logo" alt="logo" />
            {props.children}
          </header>
        </div>
      );
    }

    else if (props.val === "party") {
      return (
        <div>
          <header className="partydesign App-header">
            <img src={logo} className="party-logo" alt="logo" />
            {props.children}
          </header>
        </div>
      );
    }
  };
  