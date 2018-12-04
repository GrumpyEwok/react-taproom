import React from 'react';
import PropTypes from 'prop-types';
import KegDetail from './KegDetail';


function KegList(props) {

  const listWrapper = {
    boxSizing: 'border-box',
    width: '80%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  const item = {
    border: '1px solid blue',
  };

  return (
    <div>
      <h5>Kegs On Tap</h5>
      <hr/>
      <div style={listWrapper}>
        {props.kegList.map((keg, index) =>
          <KegDetail style={item} name={keg.name}
            brewery={keg.brewery}
            abv={keg.abv}
            price={keg.price}
            remaining={keg.remaining}
            description={keg.description}
            key={index}/>
        )}
      </div>
    </div>
  );
}


KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;
