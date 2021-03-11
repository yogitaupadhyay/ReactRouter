import React from 'react';
import  './App.css';

function Tweet(props){
  return(
    <div className="tweet">
    <h1>{props.name}</h1>
    <p>{props.message}</p>
    <p>{props.likes}</p>
  </div>
  );
}

export default Tweet;
