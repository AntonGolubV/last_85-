import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Comparison.css";
function ImgBlock ({item, setDataSmartphone}){
    function smartDelete() {
        const axiosInstance = axios.create({
          baseURL: "http://localhost:5000",
        });
        axiosInstance
          .delete("/delete/Smartphone/Delete", { params: { id: item.id, where: "comp" } })
          .then((response) => {
            setDataSmartphone(response.data);
            /* let a = response.data;
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
            } */
          })
          .catch((error) => {
            console.error(error);
          });
      }
  return (
    <div className="block_comp_img">
            <i class="bi bi-x-lg ic" onClick={smartDelete}></i>
              <img src={item.images.header} alt="" className="img_comp" />
              <div style={{ width: "100%", height: "25%" }}>
              <div className="smartName"><Link to={`/smart/${item.id}`} style={{color: "black"}}>{item.extended_name}</Link> </div>
              <div className="smartPrice">{item.prices.price_max.amount}</div>
              </div>
            </div>
        
  );
};

export default ImgBlock;
