// @ts-check
import { useStyletron } from "styletron-react";
import { MascaraPropTypes } from "./types";

const HeaderMascara = (props) => {
  const [css] = useStyletron();
  const { children } = props;

  const headerStyle = css({
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  });
  return <header className={headerStyle}>{children}</header>;
};

HeaderMascara.propTypes = MascaraPropTypes;

export default HeaderMascara;
