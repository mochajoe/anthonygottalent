import React, { Component } from "react";
import "./App.css";
import ContestantRender from "./components/ContestantRender";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContestantRender />
        <Footer />
      </div>
    );
  }
}

export default App;
