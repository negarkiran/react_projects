import React, { useState } from "react";

const SearchBar = ({ onSubmit, onClear }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  function clearField() {
    setTerm("");
    onClear();
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="ui input fluid">
          <input
            placeholder="Search by English.."
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <div className="ui button" onClick={clearField}>
            Clear
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
