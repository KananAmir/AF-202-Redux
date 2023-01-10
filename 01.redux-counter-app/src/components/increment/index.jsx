import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction } from "../../redux/actions/counter.action";

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementAction())}>Increment by 1</button>
  );
};

export default Increment;
