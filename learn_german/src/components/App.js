import React from "react";
import german from "../api/german";
import SearchBar from "./SearchBar";
import WordList from "./WordList"

class App extends React.Component {
  state = { words: [] };

  onSearchSubmit = async (term) => {
    const response = await german.get("words");
    this.setState({words : response.data})
    console.log(this.state.words);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <WordList words={this.state.words}/>
      </div>
    );
  }
}

export default App;
