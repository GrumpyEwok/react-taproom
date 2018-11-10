import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <div >
      <style jsx> {` button {
        width: 12vw;
        min-width: 58.5px;
        height: 1.5em;
        margin-bottom: 4em;
        border: 0.5px solid grey;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
      } div {
        display: flex;
        justify-content: space-around; }
      } `} </style>
      <Link to="/"><button>Home</button></Link>
      <Link to="/keg-list"><button>Keg List</button></Link>
      <Link to ="/inventory"><button>Inventory</button></Link>
    </div>
  );
}

export default Nav;
