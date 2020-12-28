import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Backdrop.scss';

export default function Backdrop({ children, isOpen, setIsOpen }) {
  return (
    <>
      {children}
      <CSSTransition
        in={isOpen}
        timeout={0}
        classNames="backdrop"
        unmountOnExit
        onEnter={() => setIsOpen(true)}
        onExited={() => setIsOpen(false)}
      >
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          aria-hidden
          className="backdrop"
        />
      </CSSTransition>
    </>
  );
}

Backdrop.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
