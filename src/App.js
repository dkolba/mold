// @ts-check
import { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./store";
import { toggle } from "./store/creator";
import { useTranslation } from "react-i18next";

export const Page = () => {
  const [{ togglevault }, dispatch] = useStore();
  const { isToggled } = togglevault;
  const { t, i18n } = useTranslation();

  const handleClick = (e) => {
    dispatch(toggle());
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={isToggled ? "App-logo" : "App-logo-reverse"}
          alt="logo"
          onClick={handleClick}
        />
        <h1>🍞 Mold</h1>
        <p onClick={handleClick}>{t("changeanimation")}</p>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </header>
    </div>
  );
};

const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
};

export default App;
