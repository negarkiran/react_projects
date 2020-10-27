import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WordList from "./WordList";
import AddWord from "./AddWord";
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <h1 className="ui header center aligned">Learn German</h1>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/list" component={WordList}/>
        <Route path="/add" component={AddWord}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
