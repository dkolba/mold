//@ts-check
import React, { createContext, useContext, useMemo } from "react";
import { useReducer } from "reinspect";
import effect from "./effect";
import config from "../config";

import { toggleReducer } from "./reducer";
export const StoreContext = createContext();

export const togglevault = { isToggled: false };

export const initialState = { togglevault };

export const mainReducer = ({ togglevault }, action) => {
  // middleware goes here, i.e calling analytics service, etc.

  return {
    togglevault: toggleReducer(togglevault, action),
  };
};

//TODO: check if this is really needed by reinspect
function init(initialState) {
  return initialState;
}

export const StoreProvider = ({ reducer, initialState, children }) => {
  const [globalstore, dispatch] = useReducer(
    reducer,
    initialState,
    init,
    config.storename
  );

  const effectDispatch = useMemo(() => effect(dispatch, globalstore), [
    dispatch,
    globalstore,
  ]);
  // const effectDispatch = useCallback(() => effect(dispatch, globalstore), [
  //   dispatch,
  //   globalstore,
  // ]);

  return (
    <StoreContext.Provider value={[globalstore, effectDispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
export const useStore = () => useContext(StoreContext);
