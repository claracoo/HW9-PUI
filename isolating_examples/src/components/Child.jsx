import "../styles.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Child(props) {
  var [component, setComponent] = useState("child");
  var [gender, setGender] = useState(null);

  useEffect(() => {
    getGender();
  });

  const getGender = () => {
    if (props.gender === "F") {
      setGender("female");
    }
  };

  return (
    <div className="child">
      <p>This is from the {component} component</p>
      <br />
      <br />
      <Link
        to="/nextpage"
        className="link"
        onClick={() => console.log("moved to next page")}
      >
        Click here for next page
      </Link>
      <br />
      <br />
      <p>
        The Child's name is {props.firstName} and is {props.age} years old. They
        consider themselves {gender}.
      </p>
      <h2>CAPTION: {props.caption}</h2>
      <button onClick={() => props.onclick({ realAge: 77 })}>
        Reveal Real Age
      </button>
      <button
        onClick={() => props.expose({ realName: "Brad", realJob: "super spy" })}
      >
        Expose my life
      </button>
    </div>
  );
}
