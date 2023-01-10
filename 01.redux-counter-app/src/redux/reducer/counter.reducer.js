let initialState = { count: 0, inputValue: "" };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SET_INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "INCREMENT_BY_INPUT_VALUE":
      return {
        ...state,
        // count: state.count + Number(state.inputValue),
        count: state.count + Number(action.payload),
        inputValue: ''
      };
    case "RESET_COUNT":
      return {
        ...state,
        // count: state.count + Number(state.inputValue),
        count: 0
      };

    default:
      return state;
  }
};
