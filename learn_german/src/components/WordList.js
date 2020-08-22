import React from "react";
import Word from "./Word";

const WordList = (props) => {
  const words = props.words.map((word) => {
    return <Word key={word.id} word={word} />;
  });

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>English</th>
            <th>German</th>
          </tr>
        </thead>
        <tbody>{words}</tbody>
      </table>
    </div>
  );
};

export default WordList;
