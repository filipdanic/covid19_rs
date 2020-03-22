import React from 'react';

export default ({
  checked,
  name,
  label,
  onChange
}: {
  checked: boolean,
  name: string,
  label: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) =>
  <label htmlFor={name}>
    <input
      id={name}
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>;
