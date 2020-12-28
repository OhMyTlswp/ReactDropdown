export default function optionsFormat(options) {
  return options.map((optionsItem) => (typeof optionsItem.selected !== 'boolean' ? { ...optionsItem, selected: false } : optionsItem));
}
