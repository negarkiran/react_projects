import React, { useState, useEffect } from "react";
import Word from "./Word";
import SearchBar from './SearchBar';
import EditWord from './EditWord';
import germanapi from "../api/german";
import { Pagination } from "semantic-ui-react";

const WordList = (props) => {
  const [words, setWords] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [wordDeleted, setWordDeleted] = useState(false);
  
  useEffect(() => {
    getWords();
  }, [activePage, wordDeleted]);

  const getWords = async () => {
    const response = await germanapi.get("words", {
      params: { page: activePage - 1, size: 10 },
    });

    setWords(response.data.items);
    setTotalPages(response.data.total);
  };

  const onDelete = async (id) => {
    const response = await germanapi.delete(`words/${id}`);
    if (response.status === 204) {
      setWordDeleted(true);
      setActivePage(1);
    }
  };

  const onClear = async () => {
    getWords();
  };

  const onUpdate = async () => {
    getWords();
  };

  const onPageChange = async (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  const onSearchSubmit = async (term) => {
    const response = await germanapi.get(`words/${term}`);
    setWords(response.data);
  };

  const wordList = words && words.map((word) => {
    return <Word key={word.id} word={word} onDelete={onDelete} onUpdate={onUpdate}/>;
  });

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} onClear={onClear}></SearchBar>
      {wordDeleted && (
        <div className="ui info message">
          <i className="close icon" onClick={() => setWordDeleted(false)}></i>
          <div className="header">Word Deleted Successfully</div>
        </div>
      )}
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th className="six wide">English</th>
            <th className="six wide">German</th>
            <th className="three wide">Action</th>
          </tr>
        </thead>
        <tbody>{wordList}</tbody>
      </table>
      <EditWord isHidden={false}/>
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

export default WordList;
