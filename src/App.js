import React from "react";

import "./App.css";

import Header from "./Components/Header";
import Carousel from "./Components/Corousel";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Collapse from "./Components/Collapse";
import CardPost from "./Components/CardPost";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Card />
      <div className="wrapper-main">
        <div>
          <Collapse />
          <CardPost />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
