export default function deselectOption({ e, dropdownOptions, id, value, setDropdownOptions, onSelect }) {
  e.stopPropagation();
  setDropdownOptions(
    dropdownOptions.map((dropdownOptionsItem) =>
      dropdownOptionsItem.id === id ? { ...dropdownOptionsItem, selected: false } : dropdownOptionsItem,
    ),
  );
  onSelect({ type: 'REMOVE', item: { value, id } });
}
