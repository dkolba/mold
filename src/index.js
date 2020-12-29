// @ts-check
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateInspector } from "reinspect";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { initialState } from "./store/state";
import { StoreProvider, mainReducer } from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";

const debug =
  process.env.NODE_ENV === "production" ? undefined : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StateInspector name="App">
        <StoreProvider initialState={initialState} reducer={mainReducer}>
          <App />
        </StoreProvider>
      </StateInspector>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
