import PropTypes from 'prop-types';
import React from 'react';
import deselectOption from '../../actions/deselectOption';
import './DropdownSelectedOptions.scss';
import DropdownSelectedOptionsItem from './DropdownSelectedOptionsItem';

export default function DropdownSelectedOptions({ dropdownOptions, onSelect, defaultValue, selectedOptions, setDropdownOptions }) {
  if (selectedOptions.length === 0 || !Array.isArray(selectedOptions)) {
    return (
      <div className="selected-options">
        <span>{defaultValue}</span>
      </div>
    );
  }
  return (
    <div className="selected-options">
      {selectedOptions.map(({ value, id }, index) => (
        <DropdownSelectedOptionsItem
          key={id}
          onSelect={(e) => {
            deselectOption({ e, dropdownOptions, id, value, setDropdownOptions, onSelect });
          }}
          length={selectedOptions.length}
          value={value}
          index={index}
        />
      ))}
    </div>
  );
}
DropdownSelectedOptions.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  setDropdownOptions: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
