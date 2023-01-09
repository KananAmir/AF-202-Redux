import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  return <h1>{count}</h1>;
};

export default Counter;
