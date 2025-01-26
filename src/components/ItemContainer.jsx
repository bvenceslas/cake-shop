import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
const ItemContainer = (props) => {
  return (
    <div className="w-[500px] mt-10 p-5 border border-gray-50 rounded-2xl">
      <h3 className="mb-5">Item - {props.item}</h3>
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

export default connect(mapStateToProps)(ItemContainer);
