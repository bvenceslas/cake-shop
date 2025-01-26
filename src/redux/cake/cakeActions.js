import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (qty = 1) => {
  return {
    type: BUY_CAKE,
    payload: qty,
  };
};
