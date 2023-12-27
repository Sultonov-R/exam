import React from "react";
import "./index.css";

const Button = (props) => {
  const { title, buttonClass, onClick } = props;

  return (
    <>
      <button onClick={onClick} className={buttonClass}>
        {title}
      </button>
    </>
  );
};

export default Button;
