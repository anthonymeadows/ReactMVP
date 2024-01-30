import React from 'react';

const Input = () => {
  return (
    <form className='input-form'>
      <label htmlFor='Input'>Input:</label>
      <input type='text' id='outputInput' name='input' placeholder='Enter input...' />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Input;
