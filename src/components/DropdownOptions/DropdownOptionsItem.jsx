import PropTypes from 'prop-types';
import React from 'react';

export default function DropdownOptionsItem({ value, onChange, selected }) {
  return (
    <label className="dropdown-options__item">
      <input
        type="checkbox"
        className="hidden"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        checked={selected}
      />
      <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        {/*eslint-disable*/}
        <path
          className={selected ? 'checkbox__selected checkbox__selected_active' : 'checkbox__selected'}
          d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
        />
        <path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
        {/*eslint-active*/}
      </svg>
      {value}
    </label>
  );
}

DropdownOptionsItem.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
