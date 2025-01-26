import React from "react";
import { buyCake, buyIceCream } from "../redux";
import { connect } from "react-redux";
const ItemContainer = (props) => {
  return (
    <div className="w-[500px] mt-10 p-5 border border-gray-50 rounded-2xl">
      <h3 className="mb-5">Item - {props.item}</h3>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
