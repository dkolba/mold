// @ts-check
import { Suspense } from "react";
import logo from "./logo.svg";
import { useStore } from "./store";
import { toggle } from "./store/creator";
import { useTranslation } from "react-i18next";
import { autoComposeDeep, useStyletron } from "styletron-react";

export const Page = () => {
  const [{ togglevault }, dispatch] = useStore();
  const { isToggled } = togglevault;
  const { t, i18n } = useTranslation();
  const [css] = useStyletron();

  const appstyle = css({
    textAlign: "center",
  });

  const appheaderstyle = css({
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  });

  const animationstyle = {
    height: "40vmin",
    pointerEvents: "none",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationName: {
        from: {
          transform: "rotate(360deg)",
        },
        to: {
          transform: "rotate(0deg)",
        },
      },
    },
  };

  const logoanimation = css({
    height: "40vmin",
    pointerEvents: "none",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationName: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  });

  const logoanimationreverse = css({
    height: "40vmin",
    pointerEvents: "none",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationName: {
        from: {
          transform: "rotate(360deg)",
        },
        to: {
          transform: "rotate(0deg)",
        },
      },
    },
  });

  const handleClick = (e) => {
    dispatch(toggle());
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={appstyle}>
      <header className={appheaderstyle}>
        <img
          src={logo}
          className={isToggled ? logoanimation : logoanimationreverse}
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

const Loader = () => <div>loading...</div>;

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
};

export default App;
