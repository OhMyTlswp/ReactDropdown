import PropTypes from 'prop-types';
import React from 'react';
import './DropdownArrow.scss';

export default function DropdownArrow({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 512.011 512.011"
      className={`dropdown-header__arrow ${isOpen ? 'dropdown-header__arrow_open' : ''}`}
    >
      <g>
        {/* eslint-disable-next-line */}
        <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0    s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667    C514.096,145.416,514.096,131.933,505.755,123.592z" />
      </g>
    </svg>
  );
}

DropdownArrow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
