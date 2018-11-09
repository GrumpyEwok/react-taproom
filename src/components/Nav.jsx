import React from 'react';
// Route import needed for link To's?

function Nav(){
  return (
    <div >
      <style jsx> {` button {
        width: 12vw;
        height: 1.5em;
        margin-bottom: 4em;
        border: 0.5px solid grey;
        border-radius: 3px;
        text-align: center;
        font-size: 16px;
        font-family: monospace;
      } div {
      display: flex;
      justify-content: space-around; }
      } `} </style>
      <button>Home</button>
      <button>Keg List</button>
      <button>Inventory</button>
    </div>
  );
}

export default Nav;
