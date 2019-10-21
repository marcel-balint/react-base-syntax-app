import React from "react";

import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <span className="Close" onClick={props.click}>
        &#10006;
      </span>
      <p>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Person;
