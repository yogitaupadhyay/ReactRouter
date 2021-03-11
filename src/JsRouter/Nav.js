import React from 'react';
import { Link } from "react-router-dom";
function Nav(){
  return(
    <div>
      <h1>Home Page</h1>
      <ul>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      </ul>
    </div>
  );
}

export default Nav;
