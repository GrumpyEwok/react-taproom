import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>This is probably an unnecessary component. Would you like to add a new keg?</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
