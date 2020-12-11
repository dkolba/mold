// @ts-check
import { TOGGLE } from "./actions";

const effect = (dispatch, { togglevault }) => {
  return async (action) => {
    const { type } = action || {};

    switch (type) {
      case TOGGLE: {
        console.warn("REMOVE ME");
        dispatch(action); // Not really needed but helps with debugging in Redux Dev Tools
        break;
      }
      default:
        // Not a special case, dispatch the action
        dispatch(action);
    }
  };
};

export default effect;
