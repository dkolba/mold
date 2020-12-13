// @ts-check
import { toggleReducer } from "./reducer";
import { togglevault } from "./index";
import { toggle } from "./creator";

describe("File reducer", () => {
  it("should toggle", () => {
    const initialstate = togglevault;
    const action = toggle();
    const simulated = toggleReducer(initialstate, action);
    const reality = { ...togglevault, isToggled: !togglevault.isToggled };
    expect(simulated).toEqual(reality);
  });
});
