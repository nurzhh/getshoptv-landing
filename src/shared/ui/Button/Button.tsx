import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

enum ButtonStyle {
  Orange = "Button_orange",
  DarkOrange = "Button_dark-orange",
  Gray = "Button_gray",
  Black = "Button_black",
  Toggle = "Button_toggle",
}

enum ButtonSize {
  Toggle = "Toggle_size",
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  size?: ButtonSize;
  styleButton?: ButtonStyle;
}

const Button = ({
  className,
  children,
  styleButton,
  size,
  ...rest
}: IButton) => {
  return (
    <button
      aria-label="Кнопка нажать"
      className={cn(
        className,
        styleButton && styles[styleButton],
        size && styles[size],
        styles.Button
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
