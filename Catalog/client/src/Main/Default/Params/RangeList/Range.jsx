import React, { useState } from "react";
import RangeInp from "./RangeInp";
import "./Range.css";
export default function Range(props) {
  const { data, paramData } = props;
  const { name, ru, min, max } = data;
  return (
    <div className={`${name}`}>
      <div className={`${name}_text`}>{ru}</div>
      <div className={`${name}_param`}>
        <RangeInp
          name={name}
          value={min}
          paramData={paramData}
          id={1}
        ></RangeInp>
        <span className="divider"></span>
        <RangeInp
          name={name}
          value={max}
          paramData={paramData}
          id={2}
        ></RangeInp>
      </div>
    </div>
  );
}
