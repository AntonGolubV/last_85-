import React, { useState, useEffect } from "react";
import "./SmartBlockList";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function SmartBLock({ data, where, setSmartList}) {
  let { id, key, extended_name, images, description, description_list } = data;
  let { header } = images;
  let no = "Нет в наличии";
  const postFavSmartKey = () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance.post("/post/Smartphone/ByKey", { params: { key: key } });
  };

  const postBasketSmartId = () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance.post("/post/Smartphone/ById", { params: { id: id } });
  };

  const postComp = () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance.post("/post/Smartphone/Comparison", { params: { id: id } });
  };

  const deleteSmart = () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance.delete("/delete/Smartphone/Delete", { params: { id: id, where: where } }).then((response) =>{
        setSmartList(response.data);
      }
    );
  }
  return (
    <div className="smart_block">
      <div className="flex_smart">
        <div style={{ height: "80%" }}>
          {" "}
          <img src={header} alt="" style={{ height: "100%" }} />
        </div>
        <div style={{ margin: "15px" }}>
          <div
            className="flex_smart_text"
            style={{ fontSize: "1.6rem", marginBottom: "5px" }}
          >
            <Link to={`/smart/${id}`} style={{color: "black"}}>
            {extended_name}
            </Link>
            
          </div>
          <div
            style={{
              fontSize: "1.3rem",
              fontFamily:
                "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              fontWeight: "bold",
            }}
          >
            {description}
          </div>
        </div>
      </div>
      {data.prices == null && <div> {no} </div>}
      {data.prices !== null && <div>{data.prices.price_max.amount} BYN</div>}
      {where == 'brand' && <>
       <button onClick={postFavSmartKey} style={{ marginRight: "15px" }}>
        Кинуть в избранное
      </button>
      <button onClick={postBasketSmartId} style={{ marginRight: "15px" }}>Отложить в корзину</button>
      <button onClick={postComp}>Сравнить</button>
      </> }
      
      {where == 'basket' && <>
       <button onClick={postFavSmartKey} style={{ marginRight: "15px" }}>
        Кинуть в избранное
      </button>
      <button onClick={deleteSmart} style={{ marginRight: "15px" }}>Удалить</button>
      <button onClick={postComp}>Сравнить</button>
      </> }
      {where == 'fav' && <>
        <button onClick={postBasketSmartId} style={{ marginRight: "15px" }}>Отложить в корзину</button>
      <button onClick={deleteSmart} style={{ marginRight: "15px" }}>Удалить</button>
      <button onClick={postComp}>Сравнить</button>
      </> }
    </div>
  );
}
