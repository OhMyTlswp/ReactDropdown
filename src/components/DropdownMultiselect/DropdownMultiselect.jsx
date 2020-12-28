import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getSelectedOptions from '../../actions/getSelectedOptions';
import optionsFormat from '../../actions/optionsFormat';
import Backdrop from '../Backdrop/Backdrop';
import DropdownArrow from '../DropdownArrow/DropdownArrow';
import DropdownHeader from '../DropdownHeader/DropdownHeader';
import DropdownOptions from '../DropdownOptions/DropdownOptions';
import DropdownSelectedOptions from '../DropdownSelectedOptions/DropdownSelectedOptions';
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper';

export default function DropdownMultiselect({ options, defaultValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState(optionsFormat(options));
  return (
    <Backdrop isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownWrapper isOpen={isOpen}>
        <DropdownHeader
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          onKeyPress={(e) => {
            if (e.code === 'Space') {
              setIsOpen(!isOpen);
            }
          }}
        >
          <DropdownSelectedOptions
            onSelect={onSelect}
            defaultValue={defaultValue}
            selectedOptions={getSelectedOptions(dropdownOptions)}
            dropdownOptions={dropdownOptions}
            setDropdownOptions={setDropdownOptions}
          />
          <DropdownArrow isOpen={isOpen} />
        </DropdownHeader>
        <DropdownOptions
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          onSelect={onSelect}
          setDropdownOptions={setDropdownOptions}
          dropdownOptions={dropdownOptions}
        />
      </DropdownWrapper>
    </Backdrop>
  );
}

DropdownMultiselect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultValue: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

DropdownMultiselect.defaultProps = {
  defaultValue: 'Select',
};
