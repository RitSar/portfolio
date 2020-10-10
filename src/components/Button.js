import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ children, type, buttonStyle, buttonSize, link }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-mobile"
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
