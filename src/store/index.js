// @ts-check
import React, { createContext, useContext, useRef } from "react";
import { useReducer } from "reinspect";
import effect from "./effect";
import config from "../config";
import { storeProviderPropTypes } from "../types";
import { toggleReducer } from "./reducer";

export const StoreContext = createContext(null);

export const mainReducer = ({ togglevault }, action) => ({
  togglevault: toggleReducer(togglevault, action),
});
// TODO: check if this is really needed by reinspect
const init = (initialState) => initialState;

const useStableFn = (fn) => {
  const ref = useRef(fn);
  ref.current = fn;

  const wrapper = (...args) => ref.current.apply(this, args);

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
  // @ts-ignore
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
StoreProvider.propTypes = storeProviderPropTypes;
