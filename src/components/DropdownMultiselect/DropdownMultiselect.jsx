import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import getSelectedOptions from '../../actions/getSelectedOptions';
import optionsFormat from '../../actions/optionsFormat';
import setIsOpen from '../../actions/setIsOpen';
import setOptionSelect from '../../actions/setOptionSelect';
import reducer from '../../reducer';
import Backdrop from '../Backdrop/Backdrop';
import DropdownArrow from '../DropdownArrow/DropdownArrow';
import DropdownHeader from '../DropdownHeader/DropdownHeader';
import DropdownOptions from '../DropdownOptions/DropdownOptions';
import DropdownSelectedOptions from '../DropdownSelectedOptions/DropdownSelectedOptions';
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper';

export default function DropdownMultiselect({ options, defaultValue, onSelect }) {
  const [state, dispatch] = useReducer(reducer, { isOpen: false, options: optionsFormat(options), defaultValue });
  return (
    <Backdrop
      isOpen={state.isOpen}
      setIsOpen={(isOpen) => {
        dispatch(setIsOpen(isOpen));
      }}
    >
      <DropdownWrapper isOpen={state.isOpen}>
        <DropdownHeader
          setIsOpen={() => {
            dispatch(setIsOpen(!state.isOpen));
          }}
        >
          <DropdownSelectedOptions
            state={state}
            selectedOptions={getSelectedOptions(state.options)}
            setOptionSelect={(e, option) => {
              dispatch(setOptionSelect(e, onSelect, option));
            }}
          />
          <DropdownArrow isOpen={state.isOpen} />
        </DropdownHeader>
        <DropdownOptions
          state={state}
          setIsOpen={(isOpen) => {
            dispatch(setIsOpen(isOpen));
          }}
          setOptionSelect={(e, option) => {
            dispatch(setOptionSelect(e, onSelect, option));
          }}
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
