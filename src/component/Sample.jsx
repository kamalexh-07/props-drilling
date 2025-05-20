import React from 'react';
D:/REACT/kamal/kamal/src/components/Sample.jsx
import Sample from "./components/Sample";

const Sample = ({ myname, myage, myfriend }) => {
  return (
    <div>
      <h2>My name: {myname}</h2>
      <h2>My age: {myage}</h2>
      <h2>My friend's name: {myfriend}</h2>
    </div>
  );
};

export default Sample;