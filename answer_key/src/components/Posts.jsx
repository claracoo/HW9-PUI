import React, { Fragment } from "react";
import posts from "../shared/posts.js";
import "../styles.css";
import { Link } from "react-router-dom";

const PostsPage = ({ numComments, commentsPerPost, onclick }) => {
  return (
    <Fragment>
      <h3 id="title">Posts</h3>
      <div>
        <h5>Statistics</h5>
        <p>Total Posts: {commentsPerPost.length}</p>
        <p>Total Comments: {numComments}</p>
      </div>
      <div id="container">
        {posts.map((post, i) => (
          <div key={i} className="post">
            <p class="whoPosted">{post.name}</p>
            <img src={post.image} alt="post of capybara" class="postImg" />
            <p class="postCaption">
              <span className="nameInCaption">{post.name}</span>
              {post.caption}
            </p>
            <Link
              to={"./details"}
              className="seeComments"
              onClick={() => {
                onclick({ idx: i });
              }}
            >
              See Comments ({commentsPerPost[i]})
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default PostsPage;
