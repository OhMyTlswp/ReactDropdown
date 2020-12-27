import PropTypes from 'prop-types';
import React from 'react';
import DropdownOptionsItem from './DropdownOptionsItem';
import './DropdownOptions.scss';

export default function DropdownOptions({ dropdownOptions, onSelect, setDropdownOptions }) {
  return (
    <div className="dropdown-options">
      {dropdownOptions.map(({ value, id, selected }) => (
        <DropdownOptionsItem
          onChange={(checked) => {
            setDropdownOptions(dropdownOptions.map((item) => (item.id === id ? { ...item, selected: checked } : item)));
            if (onSelect) {
              onSelect({ type: checked ? 'ADD' : 'REMOVE', item: { value, id } });
            }
          }}
          selected={selected}
          value={value}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
}

DropdownOptions.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  setDropdownOptions: PropTypes.func.isRequired,
};
