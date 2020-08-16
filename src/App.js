import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="mainContainer">
        <Header></Header>
        <div>
          <Route exact path="/" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
