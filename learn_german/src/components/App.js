import React, { useState, useEffect } from "react";
import germanapi from "../api/german";
import SearchBar from "./SearchBar";
import WordList from "./WordList";
import AddWord from "./AddWord";
import { Pagination } from "semantic-ui-react";

const App = () => {
  const [words, setWords] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [wordAdded, setWordAdded] = useState(false);
  const [wordDeleted, setWordDeleted] = useState(false);

  useEffect(() => {
    const getWords = async () => {
      const response = await germanapi.get("words", {
        params: { page: activePage - 1, size: 10 },
      });

      setWords(response.data.items);
      setTotalPages(response.data.total);
    };

    getWords();
  }, [activePage, wordAdded, wordDeleted]);

  const onSearchSubmit = async (term) => {
    const response = await germanapi.get(`words/${term}`);
    setWords(response.data);
  };

  const onDelete = async (id) => {
    const response = await germanapi.delete(`words/${id}`);
    if (response.status === 204) {
      setWordDeleted(true);
      setActivePage(1);
    }
  };

  const onAdd = async (english, german) => {
    const response = await germanapi.post("words", {
      english: english,
      german: german,
    });

    if (response.status === 200) {
      setWordAdded(true);
      setActivePage(1);
    }
  };

  const onPageChange = async (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <AddWord wordAdded={wordAdded} onAdd={onAdd} />
      <SearchBar onSubmit={onSearchSubmit}></SearchBar>
      {wordDeleted && (
        <div className="ui info message">
          <i className="close icon" onClick={() => setWordDeleted(false)}></i>
          <div className="header">Word Deleted Successfully</div>
        </div>
      )}
      {wordAdded && (
        <div className="ui info message">
          <i className="close icon" onClick={(e) => setWordAdded(false)}></i>
          <div className="header">Word Added Successfully</div>
        </div>
      )}
      <WordList words={words} onDelete={onDelete} />
      <div className="ui clearing segment right floated">
      <Pagination
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
      </div>
    </div>
  );
};

export default App;
