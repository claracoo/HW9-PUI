import React, { Fragment, useEffect, useState } from "react";
import posts from "../shared/posts.js";
import "../styles.css";
import { Link } from "react-router-dom";

function CommentsPage() {
  return (
    <Fragment>
      <Link to={"./"}>&#8592; Back to Posts</Link>
      <h3 id="title">Comments from someone's post (0)</h3>

      <div id="container">
        {[].map((comment, i) => (
          <div key={i} className="comment">
            <p>{comment}</p>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <label className="boxLabel">
            <input
              type="text"
              name="name"
              placeholder="Write your comment..."
              className="commentBox"
            />
          </label>
          <input type="submit" value="Submit" className="seeComments" />
        </form>
      </div>
    </Fragment>
  );
}

export default CommentsPage;
