import Range from "./Range";
import "./Range.css";
const RangeList = ({ data, paramData }) => {
  return (
    <>
      {data.map((item, index) => (
        <Range data={item} paramData={paramData}></Range>
      ))}
    </>
  );
};
export default RangeList;
