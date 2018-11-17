import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>This is probably an unnecessary component. Would you like to add a new keg?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
