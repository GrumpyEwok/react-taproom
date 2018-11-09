import React from 'react';
import breweryArt from '../assets/images/brewery-art.png';
function Splash(){
  const splashStyle = {
    left: '0',
    transform: 'translateX(67%)',
    maxWidth: '100%',
    maxHeight: '75vh'
  }
  return (
    <div>
      <div>
        <img style={splashStyle} src={breweryArt} alt='Line art of a hand holding a beer stein.'></img>
      </div>
    </div>
  );
}

export default Splash;
