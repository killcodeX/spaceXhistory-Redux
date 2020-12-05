import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import SearchBar from "./components/searchBar";
import RocketListHistory from "./components/rocketListHistory";
import RocketListAddress from "./components/rocketListAddress";
import Pagination from "./components/layout/pagination";
import "./App.css";

function App() {
  return (
    <Router>
    <div className="App bg-light">
      <Navbar />
      <div className="container">
        <SearchBar />
        <hr/>
      </div>
      <Switch>
        <Route exact path='/SpaceXhistory' component={RocketListHistory} />
        <Route exact path='/SpaceXAddress' component={RocketListAddress} />
      </Switch>
      <Pagination/>
      <hr/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
