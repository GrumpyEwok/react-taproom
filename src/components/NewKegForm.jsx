import React from 'react';

function NewKegForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      // <style jsx>{`
      // 
      //   Add styles here!
      //
      //   `}</style>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Brewery'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Abv'
          ref={(textarea) => {_issue = input;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
