import React from 'react';
import Word from './Word'

const WordList = props => {
    const words = props.words.map(word => {
        return <Word word={word} />;
      });
      return <div>{words}</div>;
}

export default WordList;