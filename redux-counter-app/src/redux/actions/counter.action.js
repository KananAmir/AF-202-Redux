//ACTION CREATORS

export const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
export const setInputAction = (value) => {
  return {
    type: "SET_INPUT",
    payload: value,
  };
};
export const incrementByInputValueAction = (value) => {
  return {
    type: "INCREMENT_BY_INPUT_VALUE",
    payload: value,
  };
};
export const resetCountAction = () => {
  return {
    type: "RESET_COUNT",
  };
};
