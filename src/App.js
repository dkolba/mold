// @ts-check
import { Suspense } from "react";
import logo from "./logo.svg";
import { useStore } from "./store";
import { toggle } from "./store/creator";
import { useTranslation } from "react-i18next";
import AppMascara from "./AppMascara";
import HeaderMascara from "./HeaderMascara";
import ImgMascara from "./ImgMascara";

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
    <AppMascara>
      <HeaderMascara>
        <ImgMascara {...{ isToggled }}>
          <img src={logo} alt="logo" onClick={handleClick} />
        </ImgMascara>
        <h1>🍞 Mold</h1>
        <p onClick={handleClick}>{t("changeanimation")}</p>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </HeaderMascara>
    </AppMascara>
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
