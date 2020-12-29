export default function setOptionSelect(e, onSelect, option) {
  e.stopPropagation();
  const payload = { ...option, selected: !option.selected };
  onSelect(payload);
  return { type: 'SET_OPTION_SELECT', payload };
}
