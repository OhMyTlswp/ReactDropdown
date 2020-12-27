import PropTypes from 'prop-types';
import React from 'react';
import './Backdrop.scss';

export default function Backdrop({ blackout, blur, children, isOpen, setIsOpen }) {
  return (
    <>
      {children}
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          aria-hidden
          style={{ opacity: blackout, backdropFilter: `blur(${blur}px)` }}
          className="backdrop"
        />
      )}
    </>
  );
}

Backdrop.defaultProps = {
  blackout: 0.2,
  blur: 5,
};

Backdrop.propTypes = {
  blackout: PropTypes.number,
  blur: PropTypes.number,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
