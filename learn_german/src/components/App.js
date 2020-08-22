import React, { useState, useEffect } from "react";
import german from "../api/german";
import SearchBar from "./SearchBar";
import WordList from "./WordList";
import AddWord from "./AddWord";
import { Pagination } from "semantic-ui-react";

const App = () => {
  const [words, setWords] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const getWords = async () => {
      const response = await german.get("words", {
        params: { page: activePage - 1, size: 10 },
      });

      setWords(response.data.items);
      setTotalPages(response.data.total);
    };

    getWords();
  }, [activePage]);

  const onSearchSubmit = async (term) => {
    const response = await german.get(`words/${term}`);
    setWords(response.data);
  };

  const onPageChange = async (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
    console.log("State Page", activePage);
    console.log("Active Page", pageInfo);
  };

  // showMore = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   const response = await german.get("words", {
  //     params: { page: this.state.page, size: 10 },
  //   });
  //   this.setState({ words: this.state.words.concat(response.data.items) });
  // };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <AddWord />
      <SearchBar onSubmit={onSearchSubmit}></SearchBar>
      <WordList words={words} />
      {/* <div className="ui center aligned basic segment">
        <button className="ui button" onClick={this.showMore}>
          Show More
        </button>
      </div> */}

      <Pagination
        boundaryRange={0}
        siblingRange={1}
        firstItem={null}
        lastItem={null}
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
        ellipsisItem={null}
      />
    </div>
  );
};

export default App;
