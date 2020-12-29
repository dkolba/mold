// @ts-check
import { useStyletron } from "styletron-react";
import { MascaraPropTypes } from "./types";

const AppMascara = (props) => {
  const [css] = useStyletron();
  const { children } = props;

  const styles = css({
    textAlign: "center",
  });

  return <div className={styles}>{children}</div>;
};

AppMascara.propTypes = MascaraPropTypes;

export default AppMascara;
