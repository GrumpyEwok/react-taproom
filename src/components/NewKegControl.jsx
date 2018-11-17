import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegForm from './NewKegForm';

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

export default NewKegControl;
