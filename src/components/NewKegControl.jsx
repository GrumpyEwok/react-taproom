import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation(){
    this.setState( {formVisibleOnPage: true} );
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onConfirmation={this.handleConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
}

export default NewKegControl;
