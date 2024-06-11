import { useEffect, useState } from "react";
import axios from "axios";

import BrandList from "./BrandFor/BrandList";
/* import Search from "./Header/Search"; */
import AllParamBlock from "./Params/allParamBlock";
import SmartList from "./SmartBlockList/SmartBlockList";

function Default({ setBlockBrandList, blockBrandList, smartList, setSmartList, setWhere, where }){
    const smartArr = [
        "Apple",
        "Samsung",
        "Honor",
        "Realme",
        "Poco",
        "Vivo",
        "Xiaomi",
        "Huawei",
      ];
      const showSmartphonsByBrand = (name) => {
        setBlockBrandList((blockBrandList) =>
          blockBrandList.filter((block) => block.length < 1)
        );
        const axiosInstance = axios.create({
          baseURL: "http://localhost:5000",
        });
        axiosInstance
          .get("/get/Smartphone/ByBrand", { params: { brand: name } })
          .then((response) => {
            setWhere('brand');
            setSmartList(response.data);
            
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <>
      <main className="main">
        <h2>Мобильные телефоны | смартфоны</h2>
        <div className="in_main">
          <AllParamBlock
            smartArr={smartArr}
            setBlockBrandList={setBlockBrandList}
            setSmartList={setSmartList}
          ></AllParamBlock>
          <aside>
            <BrandList
              data={blockBrandList}
              showBrandParent={showSmartphonsByBrand}
            ></BrandList>
            <SmartList data={smartList} setSmartList={setSmartList}  where={where}></SmartList>
          </aside>
        </div>
        <div className="getInfoEl"></div>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default Default;

