import React, { Fragment, useEffect, useState } from "react";
import posts from "../shared/posts.js";
import "../styles.css";
import { Link } from "react-router-dom";

function CommentsPage(props) {
  var [comment, setComment] = useState("");

  useEffect(() => {
    // console.log(props.comments);
  }, [comment, props.comments]);

  return (
    <Fragment>
      <Link to={"./"}>&#8592; Back to Posts</Link>
      <h3 id="title">
        Comments from {posts[props.idx].name}'s post (
        {props.comments[props.idx].length})
      </h3>

      <div id="container">
        {props.comments[props.idx].map((comment, i) => (
          <div key={i} className="comment">
            <p>{comment}</p>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit({ commentText: comment, i: props.idx });
            setComment("");
            document.getElementsByClassName("commentBox")[0].value = "";
          }}
        >
          <label className="boxLabel">
            <input
              type="text"
              name="name"
              placeholder="Write your comment..."
              className="commentBox"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="Submit" className="seeComments" />
        </form>
      </div>
    </Fragment>
  );
}

export default CommentsPage;
