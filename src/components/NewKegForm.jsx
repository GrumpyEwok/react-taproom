import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let input;
  let _name = null;
  let _brewery = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;
  let _description = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brewery: _brewery.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, description: _description.value});
    _name.value = '';
    _brewery.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
    _description.value = '';
    console.log('NewKegCreation fired!');
  }

  return (
    <div className='form-container'>
      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          left: 0;
          transform: translateX(8vw);
        }

        .form-container input {
          display: block;
          margin-bottom: 2px;
        }

        .form-container textarea {
          margin-top: 4px;
          height: 200px;
          width: 200px;
        }

        .form-container button {
          display: block;
        }

        `}</style>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'
          ref={(input) => {_brewery = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='Abv'
          ref={(input) => {_abv = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='remaining'
          placeholder='Pours Remaining'
          ref={(input) => {_remaining = input;}}/>
        <textarea
          id='description'
          placeholder='Description'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Confirm</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes= {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
