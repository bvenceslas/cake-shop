import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div className="w-[500px] mt-10 p-5 border border-gray-50 rounded-2xl">
      <h2 className="mb-5">Number of Cake - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy A Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
