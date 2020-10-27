import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import germanapi from "../api/german";

const Word = (props) => {
  const customStyles = {
    content: {
      position: "absolute",
      top: "200px",
      left: "400px",
      right: "400px",
      bottom: "280px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [german, setGerman] = useState("");
  const [english, setEnglish] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setId(props.word.id);
  });

  const isEmpty = (str) => {
    return !str || 0 === str.trim().length;
  };

  const onEdit = async (english, german, event) => {
    event.preventDefault();
    console.log("English", english);
    console.log("German", german);
    const response = await germanapi.put(`words/${id}`, {
      english: english,
      german: german,
    });

    if (response.status === 200) {
      setIsOpen(false);
      props.onUpdate();
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function showModal() {
    setIsOpen(true);
  }

  return (
    <tr>
      <td>{props.word.english}</td>
      <td>{props.word.german}</td>
      <td>
        <button className="ui right floated button" onClick={showModal}>
          Edit
        </button>
        <button
          className="ui right floated button"
          onClick={() => props.onDelete(props.word.id)}
        >
          Delete
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Edit Word"
        >
          <div className="ui fluid container ">
            <form className="ui form">
              <div className="ui equal width center aligned padded grid">
                <div className="row">
                  <h2>Edit</h2>
                </div>
              </div>
              <div className="field">
                <label>English</label>
                <input
                  type="text"
                  defaultValue={props.word.english}
                  onChange={(event) => setEnglish(event.target.value)}
                ></input>
              </div>
              <div className="field">
                <label>German</label>
                <input
                  type="text"
                  defaultValue={props.word.german}
                  onChange={(event) => setGerman(event.target.value)}
                ></input>
              </div>
              <div className="ui equal width center aligned padded grid">
                <div className="row">
                  <button
                    className="ui button two wide column"
                    onClick={(event) => onEdit(english, german, event)}
                  >
                    Submit
                  </button>
                  <button
                    className="ui button two wide column"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Word;
