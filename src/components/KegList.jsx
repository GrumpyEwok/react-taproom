import React from 'react';
import KegDetail from './KegDetail';

class KegList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      localKegList : [
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          remaining: '58'
        }
      ]
    };
  }

  render() {
    const listWrapper = {
      boxSizing: 'border-box',
      border: '1px solid blue',
      width: '80%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
    };
    return (
      <div>
        <h5>Kegs On Tap</h5>
        <hr/>
        <div style={listWrapper}>
          {this.state.localKegList.map((keg, index) =>
            <KegDetail name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              remaining={keg.remaining}
              key={index}/>
          )}
        </div>
      </div>
    );
  }
}

export default KegList;
