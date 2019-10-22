import React from "react";

import classes from "./Person.css";

const Person = props => {
  return (
    <div className={classes.Person}>
      <span className={classes.Close} onClick={props.click}>
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
