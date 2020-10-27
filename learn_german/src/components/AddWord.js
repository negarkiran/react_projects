import React, { useState, useEffect } from "react";
import germanapi from "../api/german";

const AddWord = () => {
  const [english, setEnglish] = useState("");
  const [german, setGerman] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEnglish("");
    setGerman("");
  }, [showMessage]);

  const isEmpty = (str) => {
    return (!str || 0 === str.trim().length);
  }

  const onAdd = async (english, german) => {
    if (isEmpty(english) || isEmpty(german)) {
      setShowMessage(true);
      setEnglish('');
      setGerman('');
      setMessage("Please enter valid words");
    } else {
      const response = await germanapi.post("words", {
        english: english,
        german: german,
      });
  
      if (response.status === 200) {
        setShowMessage(true);
        setMessage("Word Added Successfully");
      }
    }
  };

  return (
    <div>
      <div className="ui segment">
        {showMessage && (
          <div className="ui info message">
            <i className="close icon" onClick={(e) => setShowMessage(false)}></i>
            <div className="header">{message}</div>
          </div>
        )}
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
