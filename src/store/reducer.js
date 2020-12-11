// @ts-check
import { TOGGLE } from "./actions";

const toggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isToggled: !state.isToggled,
      };
    default:
      return state;
  }
};

export { toggleReducer };
