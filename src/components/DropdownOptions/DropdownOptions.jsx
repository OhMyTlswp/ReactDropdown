import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownOptionsItem from './DropdownOptionsItem';
import './DropdownOptions.scss';

export default function DropdownOptions({ isOpen, dropdownOptions, onSelect, setDropdownOptions, setIsOpen }) {
  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="dropdown-options"
      unmountOnExit
      onEnter={() => setIsOpen(true)}
      onExited={() => setIsOpen(false)}
    >
      <div className="dropdown-options">
        {dropdownOptions.map(({ value, id, selected }) => (
          <DropdownOptionsItem
            onChange={(checked) => {
              setDropdownOptions(dropdownOptions.map((item) => (item.id === id ? { ...item, selected: checked } : item)));
              if (onSelect) {
                onSelect({ type: checked ? 'ADD' : 'REMOVE', item: { value, id } });
              }
            }}
            selected={selected}
            value={value}
            id={id}
            key={id}
          />
        ))}
      </div>
    </CSSTransition>
  );
}

DropdownOptions.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  setDropdownOptions: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
