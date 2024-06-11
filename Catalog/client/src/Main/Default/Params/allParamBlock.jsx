import React, { useEffect, useState } from "react";
import Range from "./RangeList/Range";
import RangeList from "./RangeList/RangeList";
import ParamList from "./ParamBrandMap/ParamList";
import axios from "axios";

const AllParamBlock = ({ smartArr, setBlockBrandList, setSmartList }) => {
  const rangeObj1 = { name: "price", ru: "Цена", min: 0, max: 10000 };
  const rangeObjArr = [
    { name: "storage", ru: "Память", min: 0, max: 512 },
    { name: "ram", ru: "ОЗУ", min: 0, max: 16 },
    { name: "camera", ru: "Камера, мп", min: 0, max: 256 },
    { name: "hz", ru: "Герцовка экрана", min: 0, max: 144 },
  ];
  const objParam = {
    price: [0, 10000],
    brand: [],
    storage: [0, 512],
    ram: [0, 16],
    camera: [0, 256],
    hz: [0, 144],
  };
  const [objParamState, setObjParamState] = useState(objParam);
  
  useEffect(() => {
    console.log(objParamState);
  }, [objParamState]);
  
  const paramData = (name, value, id, check = false) => {
    if(name == "brand" && check != false){
      console.log(name, value);
      objParam[name].push(value.toLowerCase());
      objParam[name] = objParam[name].filter((item, index) => objParam[name].indexOf(item) === index);
      console.log(objParam);
      return objParam;
    }

    objParam[name].push(+value);
    objParam[name].sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
   
      objParam[name] = objParam[name].filter((item, index) => objParam[name].indexOf(item) === index);
    
    if (id == 1 && objParam[name].length > 1) {
      objParam[name].splice(0, 1);
    } else if (id == 2 && objParam[name].length > 1) {
      objParam[name].splice(2, 1);
    }
    setObjParamState(objParam);
    
  };
  function getSmartphoneByParam() {
      setBlockBrandList((blockBrandList) =>
        blockBrandList.filter((block) => block.length < 1)
      );
      const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
      });
      axiosInstance
        .post(
          "/get/Smartphone/ByParam",
          { params: { objParam: objParamState } },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setSmartList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }
  return (
    <section>
      <div className="block">Фильтр по параметрам</div>
      <Range data={rangeObj1} paramData={paramData}></Range>
      <div className="brand">
        <div className="brand_text">Бренд</div>
        <ParamList data={smartArr} paramData={paramData}></ParamList>
      </div>
      <RangeList data={rangeObjArr} paramData={paramData}></RangeList>
      <button
        type="button"
        className="btn btn-light"
        onClick={getSmartphoneByParam}
      >
        Получить
      </button>
    </section>
  );
};
export default AllParamBlock;
