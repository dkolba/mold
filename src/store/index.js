// @ts-check
import React, { createContext, useContext, useRef } from "react";
import { useReducer } from "reinspect";
import effect from "./effect";
import config from "../config";

import { toggleReducer } from "./reducer";
export const StoreContext = createContext(null);

export const togglevault = { isToggled: false };

export const initialState = { togglevault };

export const mainReducer = ({ togglevault }, action) => {
  return {
    togglevault: toggleReducer(togglevault, action),
  };
};
// TODO: check if this is really needed by reinspect
const init = (initialState) => {
  return initialState;
};

const useStableFn = (fn) => {
  const ref = useRef(fn);
  ref.current = fn;

  const wrapper = (...args) => {
    return ref.current.apply(this, args);
  };

  return useRef(wrapper).current;
};

export const StoreProvider = ({ reducer, initialState, children }) => {
  const [globalstore, dispatch] = useReducer(
    reducer,
    initialState,
    init,
    config.storename
  );

  const stableDispatch = useStableFn(dispatch);
  const effectDispatch = effect(stableDispatch, globalstore);

  return (
    <StoreContext.Provider value={[globalstore, effectDispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const [store, dispatcher] = useContext(StoreContext);
  const stableDispatch = useStableFn(dispatcher);
  return [store, stableDispatch];
};
