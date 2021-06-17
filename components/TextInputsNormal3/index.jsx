import React from "react";
import Frame122 from "../Frame122";
import "./TextInputsNormal3.css";

function TextInputsNormal3(props) {
  const { className, frame122Props } = props;

  return (
    <div className={`text-inputs-normal-1 ${className || ""}`}>
      <Frame122 className={frame122Props.className}>{frame122Props.children}</Frame122>
    </div>
  );
}

export default TextInputsNormal3;
