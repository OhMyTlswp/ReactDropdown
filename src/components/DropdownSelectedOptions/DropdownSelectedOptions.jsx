import PropTypes from 'prop-types';
import React from 'react';
import './DropdownSelectedOptions.scss';
import DropdownSelectedOptionsItem from './DropdownSelectedOptionsItem';

export default function DropdownSelectedOptions({ state, setOptionSelect, selectedOptions }) {
  if (selectedOptions.length === 0 || !Array.isArray(selectedOptions)) {
    return (
      <div className="selected-options">
        <span>{state.defaultValue}</span>
      </div>
    );
  }
  return (
    <div className="selected-options">
      {selectedOptions.map((option, index) => (
        <DropdownSelectedOptionsItem
          key={option.id}
          onSelect={(e) => {
            setOptionSelect(e, option);
          }}
          length={selectedOptions.length}
          value={option.value}
          index={index}
        />
      ))}
    </div>
  );
}
DropdownSelectedOptions.propTypes = {
  state: PropTypes.shape({
    isOpen: PropTypes.bool,
    defaultValue: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        selected: PropTypes.bool,
      }),
    ),
  }).isRequired,
  setOptionSelect: PropTypes.func.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
