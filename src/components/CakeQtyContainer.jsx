import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
const CakeQtyContainer = (props) => {
  const [qty, setQty] = useState(1);
  return (
    <div className="w-[500px] mt-10 p-5 border border-gray-50 rounded-2xl">
      <h2 className="mb-5">Number of Cake - {props.numOfCakes}</h2>
      <input
        className="bg-amber-50 border border-amber-200 mr-5 w-[250px] h-8 text-black pl-3"
        type="text"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <button onClick={() => props.buyCake(qty)}>Buy {qty} Cake(s)</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (qty) => dispatch(buyCake(qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeQtyContainer);
