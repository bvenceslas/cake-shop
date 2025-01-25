import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
const IceCreamContainer = (props) => {
  return (
    <div className="w-[500px] mt-10 p-5 border border-gray-50 rounded-2xl">
      <h2 className="mb-5">Number of IceCream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy A IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
