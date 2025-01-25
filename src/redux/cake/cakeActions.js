import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  console.log("object");
  return {
    type: BUY_CAKE,
    // payload: {},
  };
};
