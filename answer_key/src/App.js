import "./styles.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import Comments from "./components/Comments.jsx";
import { useState, useEffect } from "react";

export default function App() {
  // var [cart, setCart] = useState([])
  var [comments, setComments] = useState([
    [
      "@LegolasGreenleaf  Wow I cannot believe you were able to see all that all the time. That is crazy",
      "@MerriadocBrandybuck  Not all who wander are lost",
      "@AragornTelcontar  wowoowowowowowowowow soooooo yessss"
    ],
    [
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss",
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss",
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss",
      "@GandalfGreyhame  NO WAY I cannot believe you were able to see all that all the time. That is crazy",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss"
    ],
    [
      "@FrodoBaggins  THINGS I cannot believe you were able to see all that all the time. That is crazy",
      "@RosieCotton  Not all who wander are lost",
      "@TheodenEdnew wowoowowowowowowowow soooooo yessss",
      "@ElrondPeredhel  Not all who wander are lost",
      "@ThorinOakenshield  wowoowowowowowowowow soooooo yessss"
    ]
  ]);
  var [postIdx, setPostIdx] = useState(0);
  var [commentsPerPost, setCommentsPerPost] = useState([]);
  var [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    let tempCommentsPerPost = [];
    for (let commentSet of comments) {
      tempCommentsPerPost.push(commentSet.length);
    }
    setCommentsPerPost(tempCommentsPerPost);
    calculateTotalComments();
  }, [comments]);
  // only re render on

  // handleAddingToCart = ({name, price, color, quantity, size}) => {
  //   setCart(with stuff inside)
  // totalItemsInCart += quantity
  // }
  let handleNewComment = ({ commentText, i }) => {
    let origComments = comments;
    origComments[i].push("@Me " + commentText);
    setComments(origComments);
    let tempCommentsPerPost = commentsPerPost;
    tempCommentsPerPost[i] += 1;
    setCommentsPerPost(tempCommentsPerPost);
    calculateTotalComments();
  };

  let handleSeeCommentsClick = ({ idx }) => {
    console.log(idx);
    setPostIdx(idx);
  };

  let calculateTotalComments = () => {
    let sumComments = 0;
    for (let commentSet of comments) {
      sumComments += commentSet.length;
    }
    setTotalComments(sumComments);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path={"/"}>
            <Posts
              numComments={totalComments}
              commentsPerPost={commentsPerPost}
              onclick={handleSeeCommentsClick}
            />
          </Route>
          <Route path={"/details"}>
            <Comments
              comments={comments}
              idx={postIdx}
              onSubmit={handleNewComment}
            />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}
