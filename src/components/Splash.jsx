import React from 'react';
import breweryArt from '../assets/images/brewery-art.png';
function Splash(){
  return (
    <div>
      <h1>Generic Welcome Content Here</h1>
      <div className='splash-container'>
        <img src={breweryArt} alt='Line art of a hand holding a beer stein.'></img>
      </div>
    </div>
  );
}

export default Splash;
