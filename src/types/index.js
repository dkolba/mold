import { bool, func, shape, node } from "prop-types";
import config from "../config";

/**
 *  BASIC
 */

/**
 * ADVANCED
 */

/*
 * VAULTS
 */

const togglevault = shape({
  show: bool,
});

const store = shape({
  togglevault,
});

const storeState = shape({
  [config.publisher]: store,
});

/**
 * COMPONENTS
 */

export const storeProviderPropTypes = shape({
  reducer: func.isRequired,
  initialState: storeState.isRequired,
  children: node.isRequired,
}).isRequired;

export const MascaraPropTypes = shape({
  children: node.isRequired,
}).isRequired;
