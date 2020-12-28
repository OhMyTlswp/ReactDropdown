export default function changeOption({ dropdownOptions, onSelect, setDropdownOptions, checked, value, id }) {
  setDropdownOptions(dropdownOptions.map((item) => (item.id === id ? { ...item, selected: checked } : item)));
  if (onSelect) {
    onSelect({ type: checked ? 'ADD' : 'REMOVE', item: { value, id } });
  }
}
