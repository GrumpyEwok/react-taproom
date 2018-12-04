import React from 'react';
import PropTypes from 'prop-types';
import KegDetail from './KegDetail';


function KegList(props) {

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
        {props.kegList.map((keg, index) =>
          <KegDetail name={keg.name}
            brewer={keg.brewer}
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
