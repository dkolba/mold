import { render, screen } from "@testing-library/react";
import App from "./App";
import { StoreProvider } from "./store";

const initialState = {
  togglevault: {
    isToggled: false,
  },
};

test("renders learn react link", () => {
  render(
    <StoreProvider initialState={initialState} reducer={() => {}}>
      <App />
    </StoreProvider>
  );
  const clickElement = screen.getByText(/Click to switch animation/i);
  expect(clickElement).toBeInTheDocument();
});
