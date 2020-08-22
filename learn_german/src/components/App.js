import React from "react";
import german from "../api/german";
import SearchBar from "./SearchBar";
import WordList from "./WordList";
import AddWord from "./AddWord";

class App extends React.Component {
  state = { words: [], page: 0 };

  async componentDidMount() {
    const response = await german.get("words", {
      params: { page: this.state.page, size: 10 },
    });
    this.setState({ words: response.data });
    this.setState({ page: this.state.page + 1 });
  }

  onSearchSubmit = async (term) => {
    const response = await german.get(`words/${term}`);
    this.setState({ words: response.data });
  };

  showMore = async () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    const response = await german.get("words", {
      params: { page: this.state.page, size: 10 },
    });
    this.setState({ words: this.state.words.concat(response.data) });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <AddWord />
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <WordList words={this.state.words} />
        <div className="ui center aligned basic segment">
          <button className="ui button" onClick={this.showMore}>
            Show More
          </button>
        </div>
      </div>
    );
  }
}

export default App;
