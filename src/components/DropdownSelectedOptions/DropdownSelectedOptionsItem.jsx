import PropTypes from 'prop-types';
import React from 'react';

export default function DropdownSelectedOptionsItem({ index, value, onSelect, length }) {
  if (index < 2) {
    return (
      <div
        role="button"
        onClick={(e) => {
          onSelect(e);
        }}
        onKeyPress={(e) => {
          e.stopPropagation();
          if (e.code === 'Space') {
            onSelect(e);
          }
        }}
        tabIndex={0}
        className="selected-options__item"
      >
        {value}
      </div>
    );
  }
  if (index + 1 === length) {
    return `+${length - 2}`;
  }
  return null;
}
DropdownSelectedOptionsItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
