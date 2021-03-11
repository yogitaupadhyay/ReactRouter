import React ,{useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css';

import About from './JsRouter/About';
import Shop from './JsRouter/shop';
import Nav from './JsRouter/Nav';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App(){

  const [red,setRed]=useState(false);
  const [count,setCount]=useState(0);
  const[users,setUsers]=useState({
    name:"arya", message:"this mi my tweet" ,likes:"10"
  });

const increment= ()=>{
  setCount(count+2);
};

  const sayHello=()=>{
    console.log("say hello");
  };
  return (

    <div className="App">

    <h1>hello world!! this is My first Raeact app</h1>
    <Hello/>
    <br/>

    <h1>Tweet</h1>
      <Tweet name="yogita" message="this mi my tweet" likes="10"/>
      <Tweet name="Zara" message="this mi  my tweet" likes="10"/>
      <Tweet name="Lara" message="this mi my tweet" likes="10"/>
      <Tweet name="Sara" message="this mi my tweet" likes="10"/>


      <h1>Using State</h1>
      <button onClick={increment}>Increament by two : {count}</button>
      <Tweet name={users.name} message={users.message} likes={users.likes}/>

      <Router>
          <Nav/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop" exact component={Shop}/>
      </Router>
    </div>


  );
}

export default App;
























// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
