import React, { useMemo } from "react";
import "./button.css";

type ButtonProps = {
  title: string;
  type?: "full" | "transparent";
  theme?: "light" | "dark";
  //   onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = "light",
  theme = "light",
}) => {
  const useThemeStyles = useMemo(() => {
    if (type === "transparent" && theme === "light") {
      return "buttonLight1";
    } else if (type === "transparent" && theme === "dark") {
      return "buttonLight2";
    } else if (type === "full" && theme === "light") {
      return "buttonDark1";
    } else if (type === "full" && theme === "dark") {
      return "buttonDark2";
    }
  }, [theme, type]);

  return <button className={useThemeStyles}>{title}</button>;
};

export default Button;
