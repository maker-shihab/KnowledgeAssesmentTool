import React from 'react';

function RadioButton({ id, name, value, checked, onChange, label }) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioButton;
