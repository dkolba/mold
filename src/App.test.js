// @ts-check
import { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./setupTestsI18n";
import { Page } from "./App";
import { StoreProvider } from "./store";

const initialState = {
  togglevault: {
    isToggled: false,
  },
};

test("renders learn react link", async () => {
  render(
    <StoreProvider initialState={initialState} reducer={() => {}}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="test loading">
          <Page />
        </Suspense>
      </I18nextProvider>
    </StoreProvider>
  );
  const clickElement = await screen.findByText(/🍞 Mold/i);
  expect(clickElement).toBeInTheDocument();
});
