import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <div >
      <style jsx> {` button {
        width: 18vw;
        min-width: 58.5px;
        height: 2em;
        margin-bottom: 1em;
        background-color: #7b9ba6;
        border: none;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
        color: white;
        box-shadow: 0px 1px 4px #fafafa;
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
