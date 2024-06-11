import { useEffect, useState } from "react";
import axios from "axios";
import "./Comparison.css";

import { useNavigate } from "react-router-dom";
import  ImgBlock  from "./Img_Block/ImgBlock";


function Comparison({ setWhere }) {
  const [dataSmartphone, setDataSmartphone] = useState([]);
  const navigate = useNavigate();
  const arr = [
    "OC",
    "Экран",
    "Процессор",
    "ОЗУ",
    "Память",
    "Kамера",
    "Aкумулятор",
    "SIM",
    "Влагозащита",
  ];

  useEffect(() => {
    getComparisonSmartphone();
  }, []);

 /*  useEffect(() => {
    console.log(dataSmartphone);
  }, [dataSmartphone]); */

  function getComparisonSmartphone() {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance
      .get("/get/Smartphone/ByComparison")
      .then((response) => {
        let a = response.data;
        for(let i = 0; i < a.length; i++){
          a[i].description_list = a[i].description_list.filter((item) => item !== "поддержка карт памяти")
        }
        for(let i = 0; i < arr.length; i++){
          console.log(a[i].description_list[8]);
          if(!a[i].description_list[6].includes('аккумулятор') && !a[i].description_list[6].includes('--')){
            a[i].description_list.splice(6, 0, "--");
          }if(a[i].description_list[8] == undefined){
            a[i].description_list.splice(8, 0, "--");
          }
        setDataSmartphone(a);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Сравнение телефонов</h1>
      <button className="backButton" onClick={(() => navigate(-1))}> Вернуться</button>
      <div className="comparison_main">
        <div className="block_all_comp_img">
          <div className="block_comp_img1"></div>

          {dataSmartphone.map((item, index) => (
            <ImgBlock item={item} setDataSmartphone={setDataSmartphone}></ImgBlock>
          ))}

        </div>
        <h3 className="h3_comp">Характеристики</h3>
        <div className="characteristics">
          <div className="block_characteristics1">
            {arr.map((item, index) => (
              <div key={`comp_${index}`} className="block_char_comp">
                {item}
              </div>
            ))}
          </div>
          {dataSmartphone.map((item, index) => (
            <div key={`comp_${index}`} className="block_characteristics">
              <div className="block_char_comp">{item.description_list[0]}</div>
              <div className="block_char_comp">{item.description_list[1]}</div>
              <div className="block_char_comp">{item.description_list[2]}</div>
              <div className="block_char_comp">{item.description_list[3]}</div>
              <div className="block_char_comp">{item.description_list[4]}</div>
              <div className="block_char_comp">{item.description_list[5]}</div>
              <div className="block_char_comp">{item.description_list[6]}</div>
              <div className="block_char_comp">{item.description_list[7]}</div>
              <div className="block_char_comp">{item.description_list[8]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comparison;