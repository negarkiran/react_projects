import React from "react";

const Word = (props) => {
  return (
      <tr>
        <td>{props.word.english}</td>
        <td>{props.word.german}</td>
      </tr>
  );
};

export default Word;