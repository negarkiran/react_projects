import React from "react";

const Word = (props) => {
  return (
    <div>
      {props.word.english}: {props.word.german}
    </div>
  );
};

export default Word;