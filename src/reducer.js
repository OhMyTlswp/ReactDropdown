export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_OPTION_SELECT':
      return {
        ...state,
        options: state.options.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case 'SET_IS_OPEN':
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      throw new Error();
  }
}
