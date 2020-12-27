import PropTypes from 'prop-types';
import React from 'react';

export default function DropdownOptionsItem({ value, onChange, selected }) {
  return (
    <label className="dropdown-options__item">
      <input
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        checked={selected}
      />
      {value}
    </label>
  );
}

DropdownOptionsItem.propTypes = {
  value: PropTypes.string.isRequired,
  // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
