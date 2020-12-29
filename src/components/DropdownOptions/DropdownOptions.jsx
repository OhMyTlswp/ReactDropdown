import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownOptionsItem from './DropdownOptionsItem';
import './DropdownOptions.scss';

export default function DropdownOptions({ state, setOptionSelect, setIsOpen }) {
  return (
    <CSSTransition
      in={state.isOpen}
      timeout={200}
      classNames="dropdown-options"
      unmountOnExit
      onEnter={() => setIsOpen(true)}
      onExited={() => setIsOpen(false)}
    >
      <div className="dropdown-options">
        {state.options.map((option) => (
          <DropdownOptionsItem
            onChange={(e) => {
              setOptionSelect(e, option);
            }}
            selected={option.selected}
            value={option.value}
            id={option.id}
            key={option.id}
          />
        ))}
      </div>
    </CSSTransition>
  );
}

DropdownOptions.propTypes = {
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
  setIsOpen: PropTypes.func.isRequired,
};
