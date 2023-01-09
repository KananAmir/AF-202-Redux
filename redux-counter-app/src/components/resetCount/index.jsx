import React from "react";
import { useDispatch } from "react-redux";
import { resetCountAction } from "../../redux/actions/counter.action";

const ResetBtn = () => {
  const dispacth = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispacth(resetCountAction());
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default ResetBtn;
