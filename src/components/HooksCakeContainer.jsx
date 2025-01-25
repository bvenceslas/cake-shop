import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = (props) => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  return (
    <div className="w-[500px] mt-10 p-5 border border-amber-700 rounded-2xl">
      <h2 className="mb-5">Number of Cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy A Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
