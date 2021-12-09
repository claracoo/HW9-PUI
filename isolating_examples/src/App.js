import "./styles.css";
import Child from "./components/Child";
import NextPage from "./components/NextPage";
import React, { useEffect, useState } from "react";
import postsFromFile from "./shared/posts.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  var [age, setAge] = useState(22);
  var [name, setName] = useState("Clara");
  var [job, setJob] = useState("TA");
  var [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsFromFile);
    console.log(posts);
  });

  const revealAge = ({ realAge }) => {
    setAge(realAge);
  };

  const exposeLife = ({ realName, realJob }) => {
    setName(realName);
    setJob(realJob);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          {name} Cook is {age} years old and she is a {job}.
        </h1>
        {/*first parameter is from an "of" loop aka the literal elems, the second parameter is from an "in" loop aka the indices*/}
        <Route exact path={"/"}>
          {posts.map((post, i) => (
            <Child
              key={i}
              firstName={post.name}
              age={25}
              gender={"F"}
              caption={post.caption}
              onclick={revealAge}
              expose={exposeLife}
            />
          ))}
        </Route>
        <Route path={"/nextpage"}>
          <NextPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}
