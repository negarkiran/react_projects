import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        content="Nice Blog"
        time="Today at 6:12PM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Andy"
        content="Cool Blog"
        time="Today at 7:32AM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Garry"
        content="Great Blog"
        time="Yesterday at 8:05PM"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
