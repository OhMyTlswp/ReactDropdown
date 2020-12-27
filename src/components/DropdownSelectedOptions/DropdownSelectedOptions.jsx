import PropTypes from 'prop-types';
import React from 'react';
import './DropdownSelectedOptions.scss';

export default function DropdownSelectedOptions({ dropdownOptions, onSelect, defaultValue, selectedOptions, setDropdownOptions }) {
  if (!Array.isArray(selectedOptions)) {
    return (
      <div className="selected-options">
        <span>{defaultValue}</span>
      </div>
    );
  }
  if (selectedOptions.length === 0) {
    return (
      <div className="selected-options">
        <span>{defaultValue}</span>
      </div>
    );
  }
  return (
    <div className="selected-options">
      {selectedOptions.map(({ value, id }, index) => {
        if (index < 2) {
          return (
            <div
              key={id}
              role="button"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOptions(
                  dropdownOptions.map((dropdownOptionsItem) =>
                    dropdownOptionsItem.id === id ? { ...dropdownOptionsItem, selected: false } : dropdownOptionsItem,
                  ),
                );
                onSelect({ type: 'REMOVE', item: { value, id } });
              }}
              onKeyPress={(e) => {
                e.stopPropagation();
                if (e.code === 'Space') {
                  setDropdownOptions(
                    dropdownOptions.map((dropdownOptionsItem) =>
                      dropdownOptionsItem.id === id ? { ...dropdownOptionsItem, selected: false } : dropdownOptionsItem,
                    ),
                  );
                  onSelect({ type: 'REMOVE', item: { value, id } });
                }
              }}
              tabIndex={0}
              className="selected-options__item"
            >
              {value}
            </div>
          );
        }
        if (index + 1 === selectedOptions.length) {
          return `+${selectedOptions.length - 2}`;
        }
        return null;
      })}
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
