import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){

  const itemWrapper = {
    border: '1px solid blue',
    display: 'flex',
    width: '24%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <div style={itemWrapper}>
      <p>Name: {props.name}</p>
      <p>Brewery: {props.brewery}</p>
      <p>Description: {props.description}</p>
      <p>Abv: {props.abv}</p>
      <p>Price: {props.price}</p>
      <p>Remaining: {props.remaining}</p>
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
