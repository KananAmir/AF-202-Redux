import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementByInputValueAction,
  setInputAction,
} from "../../redux/actions/counter.action";

const IncrementByInputValue = () => {
  const dispacth = useDispatch();
  const inputValue = useSelector((state) => state.counterReducer.inputValue);
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => dispacth(setInputAction(e.target.value))}
      />
      <button onClick={() => dispacth(incrementByInputValueAction(inputValue))}>
        Increment By Input Value
      </button>
    </>
  );
};

export default IncrementByInputValue;
