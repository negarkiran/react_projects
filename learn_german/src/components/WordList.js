import React from "react";
import Word from "./Word";

const WordList = (props) => {
  const words = props.words && props.words.map((word) => {
    return <Word key={word.id} word={word} onDelete={props.onDelete}/>;
  });

  return (
    <div>
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th className="six wide">English</th>
            <th className="six wide">German</th>
            <th className="three wide">Action</th>
          </tr>
        </thead>
        <tbody>{words}</tbody>
      </table>
    </div>
  );
};

export default WordList;
