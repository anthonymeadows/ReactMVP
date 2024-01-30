import React, { useState } from 'react';

const Input = ({ setInputValue }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(value);
  };

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <label htmlFor='outputInput'>Input:</label>
      <input
        type='text'
        id='outputInput'
        name='input'
        placeholder='Enter input...'
        value={value}
        onChange={handleInputChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Input;
