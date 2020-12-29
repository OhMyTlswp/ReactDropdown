import PropTypes from 'prop-types';
import React from 'react';
import './DropdownWrapper.scss';

export default function DropdownWrapper({ isOpen, children }) {
  return <div className={`dropdown-wr ${isOpen ? 'dropdown-wr_open' : ''}`}>{children}</div>;
}
DropdownWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
