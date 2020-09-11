import React, { useState, useEffect } from "react";

const AddWord = ({ wordAdded, onAdd }) => {
  const [english, setEnglish] = useState("");
  const [german, setGerman] = useState("");

  useEffect(() => {
    setEnglish('');
    setGerman('');
  }, [wordAdded]);

  return (
    <div>
      <h1 className="ui header center aligned">Learn German</h1>
      <div className="ui segment">
        <div className="ui input fluid ">
          <input
            type="text"
            placeholder="English.."
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
          />
          <input
            type="text"
            placeholder="German.."
            value={german}
            onChange={(e) => setGerman(e.target.value)}
          />
          <button className="ui button" onClick={() => onAdd(english, german)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWord;
