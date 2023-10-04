import React from 'react';

function GlobalInput({ type, placeholder, value, onChange, name, id }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    />
  );
}

export default GlobalInput;