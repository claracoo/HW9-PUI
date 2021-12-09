import React, { Fragment } from "react";
import posts from "../shared/posts.js";
import "../styles.css";
import { Link } from "react-router-dom";

const PostsPage = (props) => {
  return (
    <Fragment>
      <h3 id="title">Posts</h3>
      <div>
        <h5>Statistics</h5>
        <p>Total Posts: 0</p>
        <p>Total Comments: 0</p>
      </div>
      <div id="container">
        {[].map((post, i) => (
          <div key={i} className="post">
            <p class="whoPosted">{post.name}</p>
            <img src={post.image} alt="post of capybara" class="postImg" />
            <p class="postCaption">
              <span className="nameInCaption">{post.name}</span>
              {post.caption}
            </p>
            <Link to={"./details"} className="seeComments">
              See Comments (0)
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default PostsPage;
