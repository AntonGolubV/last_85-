import React, { useEffect, useState } from "react";

export default function RangeInp(props) {
  let { name, value, paramData, id } = props;
  const [num, setNum] = useState(value);
  useEffect(() => {
    if(num !== 0 &&  num !== "" && num <= 10000 && num >= 100){
      console.log(typeof +num, +num);
      paramData(name, num, id);
    }
  }, [num]);
  return (
    <input
      type="number"
      placeholder={value}
      className={`${name}_input`}
      onChange={(e) => setNum(e.target.value)}
      value={num}
    />
  );
}
