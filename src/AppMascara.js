// @ts-check

import { useStyletron } from "styletron-react";

const AppMascara = (props) => {
  const [css] = useStyletron();
  const { children } = props;

  const styles = css({
    textAlign: "center",
  });

  return <div className={styles}>{children}</div>;
};
export default AppMascara;
