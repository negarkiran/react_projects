import React from "react";

const Word = (props) => {
  return (
    <tr>
      <td>{props.word.english}</td>
      <td>
        {props.word.german}
        {/* <button className="ui button" onClick={() => props.onDelete(props.word.id)}>Delete</button> */}
      </td>
    </tr>
  );
};

export default Word;
