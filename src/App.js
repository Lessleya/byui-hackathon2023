
import "./App.css";
import Categories from './page/Categories';
import About from './page/About';
import Header from "./components/header";
import Navbar from "./components/navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Categories />
    </div>
  );
}

export default App;
