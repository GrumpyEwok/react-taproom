import React from 'react';
import KegDetail from './KegDetail';

function KegList(){
  const masterKegList = [
    {
      name: 'Ruby Zozzle',
      brewer: 'Hi-Wheel',
      description: 'Sparkling Wine & Grapefruit',
      abv: '6.8%',
      price: '7',
      remaining: '20'
    },
    {
      name: 'Tart N Juicy',
      brewer: 'Epic',
      description: 'Sour IPA',
      abv: '4.5%',
      price: '6',
      remaining: '60'
    },
    {
      name: 'Hamm\'s',
      brewer: 'Miller/Coors',
      description: 'American Lager',
      abv: '4.7%',
      price: '3',
      remaining: '65'
    },
    {
      name: 'Prismatic',
      brewer: 'Ninkasi',
      description: 'Juicy IPA',
      abv:  '5.9%',
      price: '6',
      remaining: '75'
    },
    {
      name: 'Juicy Haze',
      brewer: 'New Belgium',
      description: 'India Pale Ale',
      abv:  '7.5%',
      price: '6',
      remaining: '18'
    },
    {
      name: '8 Hop',
      brewer: 'New Belgium',
      description: 'Pale Ale',
      abv:  '5.5%',
      price: '6',
      remaining: '58'
    }
  ];

  const listWrapper = {
    boxSizing: 'border-box',
    border: '1px solid blue',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  }

  return (
    <div style={listWrapper}>
    <h5>Kegs On Tap</h5>
    <hr/>
    {masterKegList.map((keg, index) =>
      <KegDetail name={keg.name}
      brewer={keg.brewer}
      description={keg.issue}
      abv={keg.abv}
      price={keg.price}
      remainer={keg.remaining}
      key={index}/>
    )}
    </div>
  );
}

export default KegList;
