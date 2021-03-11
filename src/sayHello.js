import React from 'react';

function Hello(){
  const sayHello=()=>{
    console.log("Hello!!!");
  };
  return (
    <div>
    <h3>This is SayHello component</h3>
    <button onClick={sayHello}> SayHello</button>
    </div>
  );
}

export default Hello;
