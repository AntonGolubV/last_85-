import Label from "./Label";
import "./ParamList.css";
const ParamList = ({ data, paramData }) => {

    return(
            <div className="brand_check">
                {data.map((item, index) => (
                    <Label key={`${index}`} name={item} paramData={paramData}></Label>
                ))}
            </div>
    );
};
export default ParamList;

