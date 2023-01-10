import React from "react";
import { useDispatch } from "react-redux";
import { decrementAction } from "../../redux/actions/counter.action";

const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decrementAction())}>Decrement by 1</button>
  );
};

export default Decrement;
