import { useEffect, useState } from "react";
import axios from "axios";
import "./SmartID.css";

import { useNavigate, useParams } from "react-router-dom";



function SmartID({ setWhere }) {
  const { id } = useParams();
  const [smart, setSmart] = useState({});
  const [header, setHeader] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    getSmartphone();
  }, []);

  function getSmartphone() {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000",
    });
    axiosInstance
      .get("/get/Smartphone/ByID", { params: { id: id } })
      .then((response) => {
        
       setSmart(response.data);
       setAmount(response.data.prices.price_max.amount);
       setHeader(response.data.images.header);
        }
      )
      .catch((error) => {
        console.error(error);
      });
  }
  

  return (
    <>
    
    <h2 style={{paddingLeft: "60px"}}> {smart.extended_name}</h2>
    <button className="buttonBack" onClick={(() => navigate(-1))}>Вернуться</button>
    <div className="smartAllChar">
    <div class="a">
        <img src= {header} alt="" className="imgHeader" /> 
        <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{fontSize: "1.5rem", fontWeight: "bold", alignItems: "center", textAlign: "center"}} >{smart.description}</div>
        <div style={{fontSize: "1.5rem", fontWeight: "bold", alignItems: "center", textAlign: "center", marginTop: "150px"}}>{amount}руб</div>
        </div>
        </div>
    </div>
    
    
    </>
    
  );
}

export default SmartID;