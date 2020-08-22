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
  const [wordAdded, setWordAdded] = useState(false);

  useEffect(() => {
    const getWords = async () => {
      const response = await german.get("words", {
        params: { page: activePage - 1, size: 10 },
      });

      setWords(response.data.items);
      setTotalPages(response.data.total);
    };

    getWords();
  }, [activePage, wordAdded]);

  const onSearchSubmit = async (term) => {
    const response = await german.get(`words/${term}`);
    setWords(response.data);
  };

  const onDelete = async (id) => {
    await german.delete(`words/${id}`);
  };

  const onPageChange = async (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <AddWord setWordAdded={setWordAdded} wordAdded={wordAdded}/>
      <SearchBar onSubmit={onSearchSubmit}></SearchBar>
      <WordList words={words} onDelete={onDelete} />
      <Pagination
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default App;
