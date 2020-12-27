import PropTypes from 'prop-types';
import React from 'react';
import './DropdownHeader.scss';

export default function DropdownHeader({ children, onClick, onKeyPress }) {
  return (
    <div onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex={0} className="dropdown-header">
      {children}
    </div>
  );
}

DropdownHeader.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};
