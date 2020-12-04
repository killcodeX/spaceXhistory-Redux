import React from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import SearchBar from "./components/searchBar";
import RocketList from "./components/rocketList";
import "./App.css";

function App() {
  return (
    <div className="App bg-light">
      <Navbar />
      <div className="container">
        <SearchBar />
        <hr/>
      </div>
      <RocketList />
      <Footer />
    </div>
  );
}

export default App;
