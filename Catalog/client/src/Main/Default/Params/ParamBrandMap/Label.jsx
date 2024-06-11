import React, { useEffect, useState } from "react";

export default function Label({ name, key, paramData }){
    const [check, setCheck] = useState(false);
    let brandName = name.toLowerCase();
       const paramBrand = () => {
        setCheck((check) => {
            return check == false ? true : false;
        })
       }
       useEffect(() => {
         paramData("brand", name, 0, check);
    }, [check]);
    return (
        <div>
            <input type="checkbox" id={`brand${key + 1}`}  className="inp" value={`${brandName}`} onClick={paramBrand}/>
            <label for={`brand${key + 1}`} className="brand_input">{name}</label>
        </div>
        );
    };