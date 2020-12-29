import PropTypes from 'prop-types';
import React from 'react';
import './DropdownHeader.scss';

export default function DropdownHeader({ children, setIsOpen }) {
  return (
    <div
      onClick={setIsOpen}
      onKeyPress={(e) => {
        if (e.code === 'Space') {
          setIsOpen();
        }
      }}
      role="button"
      tabIndex={0}
      className="dropdown-header"
    >
      {children}
    </div>
  );
}

DropdownHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
