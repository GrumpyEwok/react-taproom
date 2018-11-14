import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){

  const container = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };

  const itemWrapper = {
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <div style={container}>
      <div style={itemWrapper}>
        <p>Name: {props.name}</p>
        <p>Brewer: {props.brewer}</p>
        <p>Description: {props.description}</p>
        <p>Abv: {props.abv}</p>
        <p>Price: {props.price}</p>
        <p>Remaining: {props.remaining}</p>
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
};

export default KegDetail;
