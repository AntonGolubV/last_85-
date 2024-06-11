import React, { useState } from "react";
import SearchInp from "./SearchInp";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Search(props){
    const { setBlockBrandList, setSmartList, setWhere } = props;
    const navigate = useNavigate();

    const showBySubName = (subName) => {
      
      const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
      });
      axiosInstance
        .get("/get/Smartphone/BySubName", { params: { subName: subName } })
        .then((response) => {
          if(response.data.length > 1){
            setBlockBrandList((blockBrandList) =>
              blockBrandList.filter((block) => block.length < 1)
            );
            setSmartList(response.data);
            setWhere('brand');
          } else {
            alert("Ничего не найдено");
          }
          
        })
        .catch((error) => {
          console.error(error);
        });
    }; 

    function getFavSmart() {
      setBlockBrandList((blockBrandList) =>
        blockBrandList.filter((block) => block.length < 1)
      );
      const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
      });
      axiosInstance
        .get(
          "/get/Smartphone/ByFav")
        .then((response) => {
          setWhere('fav');
          setSmartList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      }

      function getBasketSmart() {
        setBlockBrandList((blockBrandList) =>
          blockBrandList.filter((block) => block.length < 1)
        );
        const axiosInstance = axios.create({
          baseURL: "http://localhost:5000",
        });
        axiosInstance
          .get(
            "/get/Smartphone/ByBasket")
          .then((response) => {
            setWhere('basket');
            setSmartList(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        }

    return(
    <header className="header">
        <h1>Maгазин</h1>
        <SearchInp showBySubName={showBySubName} ></SearchInp>
        <div className="profil">
          <div className="profil_block">
            <i
              className="bi bi-person-circle"
              style={{ color: "black", fontSize: "2.5rem" }}
            ></i>
          </div>
          <div className="profil_text">
            <span className="registration">Войти</span>
            <span className="profile_span">Профиль</span>
          </div>
        </div>
        <div className="comparison">
          <Link to="/comparison">
            <img
              src="/comparison.png"
              alt=""
              style={{ width: "100%", height: "55%" }}
            />
          </Link>
        </div>
        <div className="favourites" style={{ marginLeft: "50px" }} onClick={getFavSmart}>
          <Link to="/">
          <img
            src="/favourites.jpg"
            alt=""
            style={{ width: "100%", height: "55%" }}
          />
          </Link>
        </div>
        <div className="basket" onClick={getBasketSmart}>
          <Link to="/"> </Link>
          <div className="basket_img"></div>
          <div className="basket_text">Корзина</div>
        </div>
      </header>
    );
}