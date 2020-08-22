import React, { useState } from "react";
import germanapi from "../api/german";

const AddWord = ({ setWordAdded, wordAdded }) => {
  const [english, setEnglish] = useState("");
  const [german, setGerman] = useState("");
  const [showAddStatus, setShowAddStatus] = useState(false);

  const onSubmit = async () => {
    const response = await germanapi.post("words", {
      english: english,
      german: german,
    });
    if (response.status === 200) {
      setShowAddStatus(true);
      setEnglish('');
      setGerman('');
      setWordAdded(!wordAdded);
    }
  };

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
          <button className="ui button" onClick={onSubmit}>
            Add
          </button>
        </div>
        {showAddStatus && (
          <div className="ui info message">
            <i className="close icon" onClick={e => setShowAddStatus(false)}></i>
            <div className="header">Item Added Successfully</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddWord;
