import { cloneElement, Children } from "react";
import { useStyletron } from "styletron-react";

const ImgMascara = (props) => {
  const { children, isToggled } = props;
  const [css] = useStyletron();

  const animationNameForward = {
    from: {
      transform: "rotate(360deg)",
    },
    to: {
      transform: "rotate(0deg)",
    },
  };

  const animationNameReverse = {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  };

  const animationstyle = {
    height: "40vmin",
    pointerEvents: "none",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationDelay: "0s",
      animationIterationCount: "infinite",
    },
  };

  const logoanimation = css({
    ...animationstyle,
    "@media (prefers-reduced-motion: no-preference)": {
      ...animationstyle["@media (prefers-reduced-motion: no-preference)"],
      animationName: animationNameForward,
    },
  });

  const logoanimationreverse = css({
    ...animationstyle,
    "@media (prefers-reduced-motion: no-preference)": {
      ...animationstyle["@media (prefers-reduced-motion: no-preference)"],
      animationName: animationNameReverse,
    },
  });

  const responsive = css({ width: "100%", height: "100%" });

  return (
    <div className={isToggled ? logoanimation : logoanimationreverse}>
      {Children.map(children, (child) =>
        cloneElement(child, { className: responsive })
      )}
    </div>
  );
};
export default ImgMascara;
